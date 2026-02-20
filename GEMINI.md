# Waggle Waggle 프로젝트

## 프로젝트 개요
- 인구 혼잡도 정보를 제공하는 서버
- 외부 API를 통해 혼잡도 정보를 주기적으로 갱신
- PNPM 모노레포 형식을 따름 (`apps/*`, `packages/*`)

---

## 프로젝트 아키텍처
### 애플리케이션 (apps)
- `apps/api`: NestJS 기반 RESTful API 서버. 클라이언트 요청 처리.
- `apps/place-population-batch`: Redis Streams를 이용한 인구 혼잡도 데이터 수집 및 처리 배치 서버.
- `apps/population-scheduler`: 데이터 수집 스케줄링 관리. (현재는 Deprecated.)

### 공용 패키지 (packages)
- `@waggle/entity`: TypeORM 엔티티 및 데이터베이스 마이그레이션 관리. 모든 앱에서 공유.
- `@waggle/logger`: Winston 기반의 공용 로깅 라이브러리. 날짜별 로그 로테이션 지원.
- `@waggle/redis`: 공용 Redis 클라이언트 및 유틸리티.

---

## 코딩 컨벤션 및 개발 규칙
### 파일 및 명명 규칙
- **파일명**: `domain.type.ts` 형식 사용 (예: `place.entity.ts`, `category.controller.ts`, `user.dto.ts`).
- **클래스/인터페이스**: `PascalCase` 사용.
- **메서드/변수**: `camelCase` 사용.
- **상수**: `UPPER_SNAKE_CASE` (예: `ERROR_CODE`) 또는 `PascalCase` (상황에 따라) 사용.

### API 설계 및 구현
- **RESTful**: 모든 API는 REST 원칙을 준수하여 설계.
- **API Prefix**: 모든 API 경로는 `/api`로 시작.
- **DTO**: 요청(Request)과 응답(Response)에는 반드시 DTO를 사용하며, Swagger 데코레이터를 포함.
- **응답 규격**: 목록 조회 시 `{ list: T[], count?: number, offset?: number, limit?: number }` 형식을 준수 (클래스 `ListResponseDto<T>`, `ListPagingResponseDto<T>` 활용).
- **유효성 검사**: `ValidationPipe`를 사용하여 요청 데이터 검증 (전역 설정됨).

### 에러 처리 및 로깅
- **에러 처리**: `AllExceptionFilter`에서 전역적으로 예외를 캐치하며, `ERROR_CODE`에 정의된 코드를 반환.
- **로깅**: 비즈니스 로직의 주요 단계 및 에러 발생 시 `@waggle/logger`를 사용하여 상세한 로그 기록.

### 데이터베이스
- **TypeORM**: 모든 DB 작업은 TypeORM을 사용하며, 엔티티 간 관계를 명확히 정의.
- **Migration**: DB 스키마 변경 시 마이그레이션 파일 생성을 권장.

## 프로젝트 특정 규약
- 공통 유틸리티는 `@waggle/` Prefix를 가진 패키지로 관리.
- Swagger 문서는 `/api-docs` 경로에서 확인 가능.
  - `generate:docs`로 문서 추출 가능
- 배치 작업은 Redis Streams(`xadd`, `xread`)를 활용한 Producer/Consumer 패턴 권장.