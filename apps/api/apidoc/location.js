/**
 * @api {get} /api/location/:name 주변 장소 조회
 * @apiDescription 주변 장소 조회
 * @apiGroup Location
 *
 * @apiParam {string="송파구","영등포구","강남구","종로구","마포구","중구","서대문구","서초구","용산구","광진구","성동구","강북구"} name 지역 이름
 *
 * @apiSuccess {number} idx 장소 idx
 * @apiSuccess {string} name 장소 이름
 * @apiSuccess {object[]} places 장소 목록
 * @apiSuccess {number} places.idx 장소 idx
 * @apiSuccess {string} places.name 장소 이름
 * @apiSuccess {object[]} places.categories 카테고리
 * @apiSuccess {number} places.categories.idx 카테고리 idx
 * @apiSuccess {number} places.categories.type 카테고리 타입
 * @apiSuccess {object} places.population 혼잡도
 * @apiSuccess {number} places.population.idx 혼잡도 idx
 * @apiSuccess {string} places.population.level 혼잡도 level</br>여유 = 'RELAXATION'</br>보통 = 'NORMAL'</br>붐빔 = 'CROWDED'</br>매우 붐빔 = 'VERY_CROWDED'
 * @apiSuccess {string} places.population.message 혼잡도 message
 * @apiSuccess {number} places.population.male 남성 비율
 * @apiSuccess {number} places.population.female 여성 비율
 * @apiSuccess {number} places.population.zeroGen 0~10세 인구 비율
 * @apiSuccess {number} places.population.teenage 10대 인구 비율
 * @apiSuccess {number} places.population.twenties 20대 인구 비율
 * @apiSuccess {number} places.population.thirties 30대 인구 비율
 * @apiSuccess {number} places.population.forties 40대 인구 비율
 * @apiSuccess {number} places.population.fifties 50대 인구 비율
 * @apiSuccess {number} places.population.sixties 60대 인구 비율
 * @apiSuccess {number} places.population.seventies 70대 인구 비율
 * @apiSuccess {number} places.population.resident 상주 인구 비율
 * @apiSuccess {number} places.population.nonResident 비상주 인구 비율
 * @apiSuccess {Date} places.population.createdDate 생성 날짜
 * @apiSuccess {Date} places.population.updatedDate 업데이트 날짜
 *
 * @apiSuccessExample Response (example):
 * HTTP/1.1 200 OK
 * {
  "idx": 2,
  "name": "영등포구",
  "places": [
    {
      "idx": 42,
      "name": "오목교역·목동운동장",
      "categories": [],
      "population": {
        "idx": 42,
        "level": "RELAXATION",
        "message": "사람이 몰려있을 가능성이 낮고 붐빔은 거의 느껴지지 않아요. 도보 이동이 자유로워요.",
        "male": 45,
        "female": 55,
        "zeroGen": 7,
        "teenage": 13,
        "twenties": 12,
        "thirties": 12,
        "forties": 17,
        "fifties": 17,
        "sixties": 13,
        "seventies": 10,
        "resident": 66,
        "nonResident": 34,
        "createdDate": "2025-12-31T02:54:55.154Z",
        "updatedDate": "2025-12-31T02:54:55.154Z"
      }
    }
  ]
}
 */
