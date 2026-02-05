# Waggle Waggle API Server

장소별 혼잡도, 위치, 카테고리 정보를 제공하는 REST API 서버입니다.

## Features

- **장소 조회**: 필터링을 통한 장소 목록 제공
- **상세 정보**: 특정 장소의 실시간 인구, 도로 소통 단계, CCTV, 사고 정보 조회
- **데이터 그룹화**: 지역별 또는 카테고리별 데이터 그룹화

## API Documentation

API 서버 실행 후, 아래의 주소에서 API 문서를 확인 할 수 있습니다.

- http://localhost:3000/api-docs

## Configuration (.env)

| 변수명               | 설명                                | 예시             |
| -------------------- | ----------------------------------- | ---------------- |
| `PROJECT_NAME`       | 프로젝트 이름                       | wagglewaggle-api |
| `USE_CONSOLE_LOGGER` | 콘솔 로그 사용 여부 (default: true) | false            |
| `API_HOST`           | API 호스트 정보                     | localhost        |
| `API_PORT`           | API 포트 정보                       | 3000             |
| `MYSQL_HOST`         | MySQL 호스트 정보                   | localhost        |
| `MYSQL_PORT`         | MySQL 포트 정보                     | 3306             |
| `MYSQL_DATABASE`     | DB 정보                             | wagglewaggle     |
| `MYSQL_USERNAME`     | DB 유저 이름                        | root             |
| `MYSQL_PASSWORD`     | DB 비밀번호 정보                    | 1234             |

## Run

```bash
# 개발 모드
$ pnpm run start:dev

# 빌드 및 배포
$ pnpm run build
$ pnpm run start:prod
```
