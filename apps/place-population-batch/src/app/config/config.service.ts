import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import * as fs from 'fs';
import { ENV } from './config.constant';

export type EnvConfig = Record<string, any>;

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envValues = Object.keys(ENV).map((k) => ENV[k]);
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      PROJECT_NAME: Joi.string().required(),
      ENV: Joi.string()
        .valid(...envValues)
        .default(ENV.DEVELOPMENT),
      USE_SENTRY: Joi.boolean().required().default(false),
      USE_CONSOLE_LOGGER: Joi.boolean().required().default(false),
      MYSQL_HOST: Joi.string().required(),
      MYSQL_PORT: Joi.number().required(),
      MYSQL_DATABASE: Joi.string().required(),
      MYSQL_USERNAME: Joi.string().required(),
      MYSQL_PASSWORD: Joi.string(),
      REDIS_HOST: Joi.string().required(),
      REDIS_PORT: Joi.number().required(),
      PLACE_POPULATION_API_KEY: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(envConfig);
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  get projectName(): string {
    return this.envConfig.PROJECT_NAME;
  }
  get environment(): ENV {
    return this.envConfig.ENV;
  }
  get useSentry(): boolean {
    return this.envConfig.USE_SENTRY;
  }
  get useConsoleLogger(): boolean {
    return this.envConfig.USE_CONSOLE_LOGGER;
  }
  get mysqlHost(): string {
    return this.envConfig.MYSQL_HOST;
  }
  get mysqlPort(): number {
    return parseInt(this.envConfig.MYSQL_PORT, 10);
  }
  get mysqlDatabase(): string {
    return this.envConfig.MYSQL_DATABASE;
  }
  get mysqlUsername(): string {
    return this.envConfig.MYSQL_USERNAME;
  }
  get mysqlPassword(): string {
    return this.envConfig.MYSQL_PASSWORD;
  }
  get redisHost(): string {
    return this.envConfig.REDIS_HOST;
  }
  get redisPort(): number {
    return parseInt(this.envConfig.REDIS_PORT, 10);
  }
  get placePopulationApiKey(): string {
    return this.envConfig.PLACE_POPULATION_API_KEY;
  }
}

export const config = new ConfigService('.env');
