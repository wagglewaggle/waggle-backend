import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewPlaceList1696069375016 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /**
     * 기존 데이터 처리
     */
    await queryRunner.query(
      `update kt_place set status = 'DEACTIVATED' where name in ('교대역', '선릉역', '신림역', '역삼역', '수유리 먹자골목', '쌍문동 맛집거리', '북서울꿈의숲', '잠실종합운동장', '신도림역', '연신내역', '가산디지털단지역', '구로디지털단지역', '창동 신경제 중심지')`,
    );
    await queryRunner.query(`update kt_place set name = '경복궁' where name = '경복궁·서촌마을'`);

    /**
     * 새로운 location 추가
     */
    await queryRunner.query(`INSERT INTO location (idx, name) VALUES (18, '강서구')`);

    /**
     * 새로운 place 추가
     */
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (51, '홍대입구역(2호선)', 1, 0, 0, 5, '', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (52, '여의도한강공원', 1, 37.52524618, 126.936886, 2, '서울 영등포구 여의도동 85', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (53, '양화한강공원', 1, 37.5377989, 126.9029569, 2, '서울 영등포구 노들로 221', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (54, '합정역', 1, 37.54992166, 126.9143652, 5, '서울 마포구 양화로 지하 55', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (55, '노들섬', 1, 37.51763089, 126.9581329, 9, '서울 용산구 양녕로 445', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (56, '잠원한강공원', 1, 37.52730675, 127.0192549, 8, '서울 서초구 잠원동', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (57, '난지한강공원', 1, 37.56276115, 126.8854687, 5, '서울 마포구 한강난지로 162 ', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (58, '서촌', 1, 37.58014315, 126.9685274, 4, '서울 종로구 필운대로 45', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (59, '연남동', 1, 37.56374257, 126.9236561, 5, '서울특별시 마포구 연남동', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (60, '혜화역', 1, 37.58229169, 127.001885, 4, '서울 종로구 대학로 120', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (61, '뚝섬역', 1, 37.54719282, 127.0475898, 11, '서울 성동구 아차산로 18', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (62, '서울광장', 1, 37.56571132, 126.9778489, 6, '서울 중구 태평로1가 54-3', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (63, '해방촌·경리단길', 1, 37.53977789, 126.9917627, 9, '서울 용산구 이태원동 210-5', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (64, '삼각지역', 1, 37.53455381, 126.9730892, 9, '서울 용산구 한강대로 지하 180', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (65, '청와대', 1, 37.58645164, 126.974984, 4, '서울 종로구 청와대로 1', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (66, '강서한강공원', 1, 37.58833834, 126.8132725, 18, '서울 강서구 개화동 276-1', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (67, '이태원 앤틱가구거리', 1, 37.53352059, 126.9944278, 9, '서울 용산구 보광로 120-2', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (68, '용리단길', 1, 37.53142263, 126.9721994, 9, '서울 용산구 한강로2가 412', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (69, '덕수궁길·정동길', 1, 37.56549405, 126.9728885, 6, '서울 중구 정동길 46', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (70, '광나루한강공원', 1, 37.52671672, 127.1047951, 1, '서울 송파구 신천동 257', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (71, '청담동 명품거리', 1, 37.52603796, 127.0459897, 3, '서울 강남구 압구정로 448', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (72, '신논현역·논현역', 1, 37.50614587, 127.0237027, 3, '서울 강남구 논현동 199-2', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (73, '양재역', 1, 37.48461823, 127.0342506, 8, '서울 서초구 남부순환로 지하 2585', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (74, '어린이대공원', 1, 37.55072506, 127.0802688, 10, '서울 광진구 능동로 216', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (75, 'DDP(동대문디자인플라자)', 1, 37.55072506, 127.0802688, 6, '서울 중구 을지로 281', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (76, '이태원역', 1, 37.53451621, 126.9946484, 9, '서울 용산구 이태원로 지하 177', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (77, '광화문광장', 1, 37.53451621, 126.9946484, 4, '서울 종로구 세종로 1-68', 'ACTIVATED')`,
    );
    await queryRunner.query(
      `insert into kt_place (idx, name, provinceIdx, x, y, locationIdx, address, status) values (78, '동대문역', 1, 37.5716685, 127.0107255, 4, '서울 종로구 종로 지하 302', 'ACTIVATED')`,
    );
    /**
     * extra place
     */
    await queryRunner.query(
      `INSERT INTO kt_place (idx, name, x, y, address, status, locationIdx, provinceIdx) VALUES (79, '63빌딩', 37.52025617, 126.939837, '서울 영등포구 63로 50', 'ACTIVATED', 2, 1)`,
    );
    await queryRunner.query(
      `INSERT INTO kt_place (idx, name, x, y, address, status, locationIdx, provinceIdx) VALUES (80, '선유도공원', 37.54390734, 126.8998627, '서울 영등포구 선유로 343', 'ACTIVATED', 2, 1)`,
    );
    await queryRunner.query(
      `INSERT INTO kt_place (idx, name, x, y, address, status, locationIdx, provinceIdx) VALUES (81, '마포대교', 37.53325557, 126.9359233, '서울 영등포구 여의도동 85-2', 'ACTIVATED', 2, 1)`,
    );
    await queryRunner.query(
      `INSERT INTO kt_place (idx, name, x, y, address, status, locationIdx, provinceIdx) VALUES (82, '원효대교', 37.52576293, 126.9431473, '서울 영등포구 여의도동 87-2', 'ACTIVATED', 2, 1)`,
    );
    await queryRunner.query(
      `INSERT INTO kt_place (idx, name, x, y, address, status, locationIdx, provinceIdx) VALUES (83, '한강대교', 37.51794885, 126.9591479, '서울 용산구 이촌동 303-18', 'ACTIVATED', 9, 1)`,
    );
    await queryRunner.query(
      `INSERT INTO kt_place (idx, name, x, y, address, status, locationIdx, provinceIdx) VALUES (84, '서강대교', 37.53815106, 126.9257585, '서울 영등포구 여의도동 83-2', 'ACTIVATED', 2, 1)`,
    );
    // await queryRunner.query(
    //   `INSERT INTO kt_place (idx, name, x, y, address, status, locationIdx, provinceIdx) VALUES (85, '사육신 역사공원', 37.51405671, 126.9481783, '서울 동작구 노량진로 191', 'ACTIVATED', 15, 1)`,
    // );
    // await queryRunner.query(
    //   `INSERT INTO kt_place (idx, name, x, y, address, status, locationIdx, provinceIdx) VALUES (86, '중앙대·흑석역', 37.50653306, 126.9589505, '서울 동작구 흑석로 84', 'ACTIVATED', 15, 1)`,
    // );

    /**
     * 새로운 카테고리 추가
     */
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (51, null, 6)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (52, null, 4)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (52, null, 3)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (52, null, 9)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (53, null, 4)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (53, null, 3)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (53, null, 9)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (54, null, 6)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (54, null, 9)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (55, null, 4)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (55, null, 3)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (55, null, 9)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (56, null, 4)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (56, null, 3)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (57, null, 4)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (57, null, 3)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (58, null, 5)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (58, null, 7)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (59, null, 7)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (60, null, 6)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (61, null, 6)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (62, null, 5)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (63, null, 7)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (64, null, 6)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (65, null, 5)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (66, null, 4)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (66, null, 3)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (67, null, 7)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (68, null, 7)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (69, null, 7)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (69, null, 5)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (70, null, 4)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (70, null, 3)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (71, null, 7)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (72, null, 6)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (73, null, 6)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (74, null, 3)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (74, null, 1)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (75, null, 8)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (76, null, 6)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (77, null, 5)`);
    await queryRunner.query(`insert into category (ktPlaceIdx, sktPlaceIdx, typeIdx) values (78, null, 6)`);
    /**
     * extra place
     */
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx) VALUES (9, 79)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx) VALUES (9, 80)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx) VALUES (9, 81)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx) VALUES (9, 82)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx) VALUES (9, 83)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx) VALUES (9, 84)`);
    // await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx) VALUES (9, 85)`);
    // await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx) VALUES (9, 86)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
