import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { RedisService } from '@waggle/redis';
import {
  PLACE_POPULATION_API_ENDPOINT,
  PLACE_POPULATION_API_HOST,
  PLACE_POPULATION_REDIS_GROUP,
  PLACE_POPULATION_REDIS_KEY,
} from './place-population.constant';
import Axios from 'axios';
import { config } from '../../app/config/config.service';
import { CityDataPopulation, PlacePopulationApiData } from './place-population.interface';
import { JobLogService } from '../../job-log/job-log.service';
import { PlacePopulation } from '@waggle/entity';
import { PlacePopulationService } from '../../place-population/place-population.service';
import { LoggerService } from '@waggle/logger';

@Injectable()
export class PlacePopulationConsumer implements OnModuleInit, OnModuleDestroy {
  private readonly CONSUMER_NAME: string = `consumer-${Math.random().toString(36).substring(7)}`;
  private isRunning = true;

  constructor(
    private readonly redis: RedisService,
    private readonly logger: LoggerService,
    private readonly placePopulationService: PlacePopulationService,
    private readonly jobLogService: JobLogService,
  ) {}

  async onModuleInit() {
    try {
      await this.redis.client.xgroup('CREATE', PLACE_POPULATION_REDIS_KEY, PLACE_POPULATION_REDIS_GROUP, '$', 'MKSTREAM');
    } catch (e) {
      if (!e.message.includes('BUSYGROUP')) {
        this.logger.error('Redis Group Error', e);
      }
    }

    await this.run();
  }

  async run() {
    this.logger.log(`[${this.CONSUMER_NAME}] Started Listening...`);

    while (this.isRunning) {
      const start = new Date();

      try {
        const streamData = (await this.redis.client.xreadgroup(
          'GROUP',
          PLACE_POPULATION_REDIS_GROUP,
          this.CONSUMER_NAME,
          'COUNT',
          1,
          'BLOCK',
          5000,
          'STREAMS',
          PLACE_POPULATION_REDIS_KEY,
          '>',
        )) as unknown as any[];

        if (!streamData) {
          continue;
        }

        // streamData = [[streamKey, [[messageId, [key, val, key, val, ...]]]]]
        const [_, messages] = streamData[0];
        const [messageId, fields] = messages[0];
        const parsedData = this.parseFields(fields);

        await this.processData(parsedData);

        await this.redis.client.xack(PLACE_POPULATION_REDIS_KEY, PLACE_POPULATION_REDIS_GROUP, messageId);
        await this.redis.client.xdel(PLACE_POPULATION_REDIS_KEY, messageId);

        this.logger.log(`[${parsedData.name}(${parsedData.placeIdx})] successfully updated`);
      } catch (e) {
        this.logger.error(`[${this.CONSUMER_NAME}] Error:`, e);
        this.jobLogService.add(this.CONSUMER_NAME, `Error: ${e.message}`, (new Date().getTime() - start.getTime()) / 1000);

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  }

  private async processData(parsedData: { placeIdx: number; name: string }) {
    const { placeIdx, name } = parsedData;

    const apiUrl = `${PLACE_POPULATION_API_HOST}/${config.placePopulationApiKey}/${PLACE_POPULATION_API_ENDPOINT}`;

    const { data } = await Axios.get<PlacePopulationApiData>(`${apiUrl}/${name}`);

    if (data.RESULT['RESULT.CODE'] !== 'INFO-000') {
      this.logger.warn(`undefined city data : ${name}(${placeIdx})`);
      return;
    }

    const instance = this.createPopulationEntity(placeIdx, data['SeoulRtd.citydata_ppltn'][0]);
    await this.placePopulationService.upsertPopulation(instance);
  }

  private createPopulationEntity(placeIdx: number, apiResult: CityDataPopulation): PlacePopulation {
    return PlacePopulation.createInstance({
      place: {
        idx: placeIdx,
      },
      level: PlacePopulation.getPopulationLevelByApiResult(apiResult.AREA_CONGEST_LVL),
      message: apiResult.AREA_CONGEST_MSG,
      male: Number(apiResult.MALE_PPLTN_RATE),
      female: Number(apiResult.FEMALE_PPLTN_RATE),
      zeroGen: Number(apiResult.PPLTN_RATE_0),
      teenager: Number(apiResult.PPLTN_RATE_10),
      twenties: Number(apiResult.PPLTN_RATE_20),
      thirties: Number(apiResult.PPLTN_RATE_30),
      forties: Number(apiResult.PPLTN_RATE_40),
      fifties: Number(apiResult.PPLTN_RATE_50),
      sixties: Number(apiResult.PPLTN_RATE_60),
      seventies: Number(apiResult.PPLTN_RATE_70),
      resident: Number(apiResult.RESNT_PPLTN_RATE),
      nonResident: Number(apiResult.NON_RESNT_PPLTN_RATE),
    });
  }

  private parseFields(fields: any[]): { placeIdx: number; name: string } {
    return {
      placeIdx: Number(fields[1]),
      name: String(fields[3]),
    };
  }

  onModuleDestroy() {
    this.isRunning = false;
    this.redis.client.disconnect();
  }
}
