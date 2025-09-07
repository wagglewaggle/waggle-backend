import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNewCctvInfo1696520763999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /**
     * delete all data
     */
    await queryRunner.query(`delete from cctv`);

    /**
     * add cctv info
     */
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/306.stream/playlist.m3u8', '서울숲', 36, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/2.stream/playlist.m3u8', '상암교', 37, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/4.stream/playlist.m3u8', '월드컵 정문', 37, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/255.stream/playlist.m3u8', '용산가족공원', 29, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/201.stream/playlist.m3u8', '청담대교북단', 31, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/41.stream/playlist.m3u8', '양화대교북단', 32, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/56.stream/playlist.m3u8', '반포대교남단', 33, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/26.stream/playlist.m3u8', '한강대교북단', 38, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/62.stream/playlist.m3u8', '광화문', 7, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/63.stream/playlist.m3u8', '경복궁역', 7, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/131.stream/playlist.m3u8', '안국역', 7, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/132.stream/playlist.m3u8', '창덕궁R', 9, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/284.stream/playlist.m3u8', '원남R', 9, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/207.stream/playlist.m3u8', '강남역', 10, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/289.stream/playlist.m3u8', '교보타워R', 10, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/54.stream/playlist.m3u8', '강남터미널', 12, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/55.stream/playlist.m3u8', '서울성모병원', 12, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/26.stream/playlist.m3u8', '한강대교북단', 18, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/124.stream/playlist.m3u8', '어린이대공원역', 11, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/46.stream/playlist.m3u8', '이대역', 16, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/286.stream/playlist.m3u8', '대신R', 16, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/45.stream/playlist.m3u8', '신촌', 16, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/16.stream/playlist.m3u8', '연세대', 16, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/179.stream/playlist.m3u8', '왕십리역오거리', 19, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.54:1935/live/328.stream/playlist.m3u8', '도선사거리', 19, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/178.stream/playlist.m3u8', '상왕십리역', 19, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/6.stream/playlist.m3u8', '증산교', 20, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/1.stream/playlist.m3u8', '상암사거리', 20, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.54:1935/live/329.stream/playlist.m3u8', '상암초교', 20, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/312.stream/playlist.m3u8', '수색역3거리', 20, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/58.stream/playlist.m3u8', '녹사평역', 4, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/256.stream/playlist.m3u8', '한남고가', 4, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/287.stream/playlist.m3u8', '을지병원R', 23, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/183.stream/playlist.m3u8', '도산공원', 27, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/151.stream/playlist.m3u8', '종로2가', 28, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/131.stream/playlist.m3u8', '안국역', 28, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/156.stream/playlist.m3u8', '청계6가', 2, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/172.stream/playlist.m3u8', '동대문운동장', 2, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/133.stream/playlist.m3u8', '이화사거리', 21, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/135.stream/playlist.m3u8', '성균관대입구', 21, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/136.stream/playlist.m3u8', '한성대입구', 21, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/134.stream/playlist.m3u8', '대학로', 21, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/62.stream/playlist.m3u8', '광화문', 8, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/273.stream/playlist.m3u8', '광화문광장', 8, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/61.stream/playlist.m3u8', '세종로', 8, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/131.stream/playlist.m3u8', '안국역', 22, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/291.stream/playlist.m3u8', '2,3호터널', 30, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/189.stream/playlist.m3u8', '북한남', 30, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/223.stream/playlist.m3u8', '삼성역', 1, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/222.stream/playlist.m3u8', '코엑스', 1, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/154.stream/playlist.m3u8', '청계2가', 5, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/155.stream/playlist.m3u8', '청계5가', 5, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/156.stream/playlist.m3u8', '청계6가', 5, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/157.stream/playlist.m3u8', '청계8가', 5, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/43.stream/playlist.m3u8', '동교동삼거리', 51, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/276.stream/playlist.m3u8', '명동역', 3, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/59.stream/playlist.m3u8', '회현R', 3, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/169.stream/playlist.m3u8', '을지로1가', 3, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/274.stream/playlist.m3u8', '서울광장', 3, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/60.stream/playlist.m3u8', '시청', 3, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/154.stream/playlist.m3u8', '청계2가', 3, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/29.stream/playlist.m3u8', '서울역', 41, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/282.stream/playlist.m3u8', '철도빌딩', 41, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.54:1935/live/327.stream/playlist.m3u8', '염천교', 41, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/257.stream/playlist.m3u8', '노량진삼거리', 44, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/215.stream/playlist.m3u8', '잠실역', 45, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/216.stream/playlist.m3u8', '올림픽공원', 45, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/321.stream/playlist.m3u8', '올림픽공원남단', 45, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/305.stream/playlist.m3u8', '여의도공원', 48, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.54:1935/live/1036.stream/playlist.m3u8', '여의대로 여의3 -> 신월 방향', 48, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/38.stream/playlist.m3u8', '여의공원', 48, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/34.stream/playlist.m3u8', '영등포역', 49, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/96.stream/playlist.m3u8', '영등포시장', 49, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/86.stream/playlist.m3u8', '양화대교남단', 53, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/85.stream/playlist.m3u8', '여의하류IC', 53, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/42.stream/playlist.m3u8', '합정역', 54, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/310.stream/playlist.m3u8', '구룡4거리(시계)', 57, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/2.stream/playlist.m3u8', '상암교', 57, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.54:1935/live/329.stream/playlist.m3u8', '상암초교', 57, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/63.stream/playlist.m3u8', '경복궁역', 58, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/43.stream/playlist.m3u8', '동교동삼거리', 59, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/134.stream/playlist.m3u8', '대학로', 60, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/135.stream/playlist.m3u8', '성균관대입구', 60, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/133.stream/playlist.m3u8', '이화사거리', 60, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/306.stream/playlist.m3u8', '서울숲', 61, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/58.stream/playlist.m3u8', '녹사평역', 63, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/28.stream/playlist.m3u8', '삼각지', 64, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/27.stream/playlist.m3u8', '용산구청', 64, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/87.stream/playlist.m3u8', '방화대교남단', 66, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/88.stream/playlist.m3u8', '행주대교남단', 66, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/58.stream/playlist.m3u8', '녹사평역', 67, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/256.stream/playlist.m3u8', '한남고가', 67, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/50.stream/playlist.m3u8', '서대문역', 69, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/128.stream/playlist.m3u8', '천호대교남단', 70, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/289.stream/playlist.m3u8', '교보타워R', 72, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/208.stream/playlist.m3u8', '양재역', 73, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/209.stream/playlist.m3u8', '교육개발원입구', 73, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/267.stream/playlist.m3u8', '구의사거리', 74, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/124.stream/playlist.m3u8', '어린이대공원역', 74, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/127.stream/playlist.m3u8', '대공원후문', 74, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/172.stream/playlist.m3u8', '동대문운동장', 75, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/58.stream/playlist.m3u8', '녹사평역', 76, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/256.stream/playlist.m3u8', '한남고가', 76, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/62.stream/playlist.m3u8', '광화문', 77, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/273.stream/playlist.m3u8', '광화문광장', 77, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/61.stream/playlist.m3u8', '세종로', 77, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/156.stream/playlist.m3u8', '청계6가', 78, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/83.stream/playlist.m3u8', '63빌딩', 79, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/86.stream/playlist.m3u8', '양화대교남단', 80, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/41.stream/playlist.m3u8', '양화대교북단', 80, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/244.stream/playlist.m3u8', '원효대교남단', 82, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/26.stream/playlist.m3u8', '한강대교북단', 83, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/257.stream/playlist.m3u8', '노량진삼거리', 85, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/80.stream/playlist.m3u8', '원불교', 86, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/214.stream/playlist.m3u8', '종합운동장', 40, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.53:1935/live/293.stream/playlist.m3u8', '힐튼호텔', 30, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/4.stream/playlist.m3u8', '월드컵 정문', 57, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.51:1935/live/40.stream/playlist.m3u8', '가양대교북단', 57, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://210.179.218.52:1935/live/184.stream/playlist.m3u8', '청담사거리', 72, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('http://211.181.145.27:7080/live/gks&RK0111&/QVGA/playlist.m3u8', '청담사거리', 83, null)`,
    );

    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/yEVZzLxwgxc?si=v68GuvHZkL9Fa32g', '롯데월드', null, 2)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/watch?v=mRfZmISiVVg', '에버랜드', null, 19)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://md.kbs.co.kr/special/cctvShare?cctvId=9965', '홍제천', 37, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/O2DngK01WBE?si=cJ18FHDudmNlZwoW', '뚝섬 한강공원', 31, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://md.kbs.co.kr/special/cctvShare?cctvId=9998', '반포한강공원', 33, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/m7RPag5r5x8?si=QWw3CznZnx5QFo_t', '한강 공원 잠수교', 33, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/YUJWrLlh5-A?si=woihqr1bWYUctgU2', '여의도 한강', 38, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/watch?v=q9d8sLORIio', '잠실대교', 40, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/PaKj6S0eUdg?si=2nq_QqQEcYI7iO__', '경복궁', 7, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://md.kbs.co.kr/special/cctvShare?cctvId=9999', '강남 강남대로', 10, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://md.kbs.co.kr/special/cctvShare?cctvId=9990', '서초 서초대로', 10, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/gXwqP6MLOVU?si=S8sddXhBOCBIYbHR', '동대문디자인플라자', 2, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/watch?v=4NZtsD8bieU', '남산서울타워', 30, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/w28swMa-cIM?si=eS5A0Y85TBGpWWiY', '서울역광장', 41, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/V4xCIzkeIuE?si=-8JWOm4aVor-Butr', '석촌호수', 45, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/ydCsp_vOe_8?si=6VBWImcVaclWKBG_', '롯데월드타워', 45, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://md.kbs.co.kr/special/cctvShare?cctvId=9961', '영등포 여의도', 48, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://md.kbs.co.kr/special/cctvShare?cctvId=9961', '영등포 여의도', 52, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://md.kbs.co.kr/special/cctvShare?cctvId=9962', '중구 서울광장', 62, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://md.kbs.co.kr/special/cctvShare?cctvId=9973', '서초 양재동(양재천)', 73, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/gXwqP6MLOVU?si=S8sddXhBOCBIYbHR', '동대문디자인플라자', 75, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/UP1V4DMG1hY?si=LC70qjttQLM7Y1KX', '광화문대로', 77, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/lYYcX06Tn7g?si=t0dAeu5uvO1BzeaT', '마포대교', 81, null)`,
    );
    await queryRunner.query(
      `insert into cctv (src, cctvname, ktPlaceIdx, sktPlaceIdx) values ('https://www.youtube.com/live/Ru9s9EGNUgI?si=hB55DElTnOPviUcc', '서강대교', 84, null)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
