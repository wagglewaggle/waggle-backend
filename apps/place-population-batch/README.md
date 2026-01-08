# Place Population Batch

서울시 실시간 도시데이터 API를 통해, 데이터를 수집하고 가공하는 배치 애플리케이션입니다.  
**Producer/Consumer 패턴**을 적용하여 방대한 데이터를 처리하고, 확장성을 고려하도록 했습니다.

## Architecture Details

이 앱은 두 가지 역할로 나뉘어 동작합니다.

### 1. Producer (`src/command/place-population.producer.ts`)

DB에서 데이터 수집 대상(`status: ACTIVATED`)인 장소를 조회하여 Redis Streams에 메시지를 생성합니다.

- **Trigger**: OS Cron 또는 수동 실행
- **Redis Key**: `place:population:queue`

### 2. Worker (`src/worker/place-population/place-population.worker.ts`)

Redis Streams에 쌓인 메시지를 수신하고, 외부 API를 호출하고 데이터를 수집, 가공합니다.

- **로직**
  1. Redis Streams에서 `placeIdx`, `name` 수신
  2. API 호출
  3. 데이터 파싱
  4. MySQL DB 업데이트 (`Upsert`)
  5. Message ACK 처리

## API Key

이 서비스는 서울 열린데이터 광장에서 제공하는 API Key가 필수입니다.  
아래의 링크에서 API 정보를 확인할 수 있습니다.  
https://data.seoul.go.kr/dataList/OA-21285/F/1/datasetView.do

API Key를 .env에 등록합니다.

- `PLACE_POPULATION_API_KEY`: 서울 열린데이터 광장 API 인증키

## Test

테스트를 하려면, Producer를 통해 MQ에 메시지를 발행한 후 Consumer로 처리해야합니다.

> ‼️ 중요 ‼️  
> Redis Streams는 **Consumer Group**을 지원합니다.  
> Consumer Group이 생성되고 난 후, Stream에 메시지가 발행되어야만 Consumer가 작업을 처리하기 때문에  
> **Consumer에서 Consumer Group을 먼저 생성하고, Producer를 실행합니다.**

아래의 명령어로 실행 가능합니다.

```bash
# Producer 실행
$ pnpm run start:producer

# Consumer 실행
$ pnpm run start:consumer
```
