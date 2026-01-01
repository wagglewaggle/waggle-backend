import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertPlaceInfo1767147531362 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('강남 MICE 관광특구', 1, 37.51095136635107, 127.06016778945924, 3, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('동대문 관광특구', 1, 37.567269671705716, 127.0113515853882, 6, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('명동 관광특구', 1, 37.564650367842184, 126.98208332061769, 6, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('이태원 관광특구', 1, 37.534419660369636, 126.99628829956056, 9, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('잠실 관광특구', 1, 37.56958274658616, 126.99620246887208, 4, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('종로·청계 관광특구', 1, 37.55458049807929, 126.92187309265138, 5, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('홍대 관광특구', 1, 37.57992267352886, 126.97302818298341, 4, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('경복궁', 1, 37.570348086429135, 126.97579622268678, 4, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('광화문·덕수궁', 1, 37.57927647015724, 126.99345588684083, 4, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('보신각', 1, 37.49852498844754, 127.02851772308351, 3, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('서울 암사동 유적', 1, 37.53967731569061, 127.06872940063478, 10, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('창덕궁·종묘', 1, 37.50465332371542, 127.00598716735841, 8, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('가산디지털단지역', 1, 37.49256640249289, 127.01351881027223, 8, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('강남역', 1, 37.505538486122944, 127.05044746398927, 3, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('건대입구역', 1, 37.48490466486019, 126.9292974472046, 8, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('고덕역', 1, 37.55733623958529, 126.93869590759279, 7, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('고속터미널역', 1, 37.50114661565296, 127.0383882522583, 3, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('교대역', 1, 37.530087866273625, 126.96049481687398, 9, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('구로디지털단지역', 1, 37.562184055994926, 127.03903198242189, 11, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('구로역', 1, 37.57999069461015, 126.89247608184816, 5, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('군자역', 1, 37.58034780426735, 127.00729608535768, 4, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('대림역', 1, 37.58342567840362, 126.98498010635377, 4, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('동대문역', 1, 37.52119731630126, 127.02392578125001, 3, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('뚝섬역', 1, 37.54386275682704, 127.05669164657594, 11, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('미아사거리역', 1, 37.64159225623666, 127.02598571777345, 12, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('발산역', 1, 37.64777678936475, 127.03330278396608, 12, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('사당역', 1, 37.525485900907675, 127.0386028289795, 3, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('삼각지역', 1, 37.57342802690296, 126.98714524564596, 4, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('서울대입구역', 1, 37.52266090859854, 126.98101043701173, 9, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('서울식물원·마곡나루역', 1, 37.551280278481535, 126.99401378631593, 6, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('서울역', 1, 37.52865072781799, 127.07272103056314, 10, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('선릉역', 1, 37.55250491995003, 126.899273050949, 5, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('성신여대입구역', 1, 37.5092828889319, 126.99413230642679, 8, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('수유역', 1, 37.62167592099053, 127.04182147979738, 12, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('신논현역·논현역', 1, 37.4291716932771, 127.01650142669679, 8, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('신도림역', 1, 37.54369262152499, 127.0386028289795, 11, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('신림역', 1, 37.570195019089674, 126.8833351135254, 5, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('신촌·이대역', 1, 37.51993752432214, 126.96361949667336, 9, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('양재역', 1, 37.5145767553017, 127.07385778427125, 1, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('역삼역', 1, 37.51796329776014, 127.085123565048, 1, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('연신내역', 1, 37.5568477643586, 126.923770663398, 5, 'ACTIVATED', '')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('오목교역·목동운동장', 1, 37.5252461813568, 126.936886048301, 2, 'ACTIVATED', '서울 영등포구 여의도동 85')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('왕십리역', 1, 37.5377988975503, 126.902956932478, 2, 'ACTIVATED', '서울 영등포구 노들로 221')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('용산역', 1, 37.5499216550352, 126.914365220924, 5, 'ACTIVATED', '서울 마포구 양화로 지하 55')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('이태원역', 1, 37.5176308882022, 126.958132858968, 9, 'ACTIVATED', '서울 용산구 양녕로 445')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('장지역', 1, 37.5273067501807, 127.019254867469, 8, 'ACTIVATED', '서울 서초구 잠원동')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('장한평역', 1, 37.5627611476845, 126.885468703595, 5, 'ACTIVATED', '서울 마포구 한강난지로 162 ')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('천호역', 1, 37.5801431466092, 126.968527417705, 4, 'ACTIVATED', '서울 종로구 필운대로 45')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('총신대입구(이수)역', 1, 37.5637425675635, 126.923656112031, 5, 'ACTIVATED', '서울특별시 마포구 연남동')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('충정로역', 1, 37.5822916920727, 127.001885012809, 4, 'ACTIVATED', '서울 종로구 대학로 120')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('합정역', 1, 37.5471928192926, 127.047589805912, 11, 'ACTIVATED', '서울 성동구 아차산로 18')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('혜화역', 1, 37.5657113246588, 126.977848935338, 6, 'ACTIVATED', '서울 중구 태평로1가 54-3')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('홍대입구역(2호선)', 1, 37.5397778862741, 126.991762703936, 9, 'ACTIVATED', '서울 용산구 이태원동 210-5')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('회기역', 1, 37.5345538098826, 126.973089228331, 9, 'ACTIVATED', '서울 용산구 한강대로 지하 180')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('가락시장', 1, 37.5864516449743, 126.974983978754, 4, 'ACTIVATED', '서울 종로구 청와대로 1')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('가로수길', 1, 37.5883383381822, 126.813272482285, 18, 'ACTIVATED', '서울 강서구 개화동 276-1')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('광장(전통)시장', 1, 37.5335205934954, 126.994427844302, 9, 'ACTIVATED', '서울 용산구 보광로 120-2')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('김포공항', 1, 37.5314226251013, 126.972199399135, 9, 'ACTIVATED', '서울 용산구 한강로2가 412')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('노량진', 1, 37.5654940507047, 126.972888511313, 6, 'ACTIVATED', '서울 중구 정동길 46')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('덕수궁길·정동길', 1, 37.5267167204688, 127.1047950771, 1, 'ACTIVATED', '서울 송파구 신천동 257')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('북촌한옥마을', 1, 37.5260379627442, 127.04598973117, 3, 'ACTIVATED', '서울 강남구 압구정로 448')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('서촌', 1, 37.5061458729522, 127.023702700042, 3, 'ACTIVATED', '서울 강남구 논현동 199-2')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('성수카페거리', 1, 37.4846182332966, 127.034250648485, 8, 'ACTIVATED', '서울 서초구 남부순환로 지하 2585')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('쌍문역', 1, 37.5507250606198, 127.080268791812, 10, 'ACTIVATED', '서울 광진구 능동로 216')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('압구정로데오거리', 1, 37.5507250606198, 127.080268791812, 6, 'ACTIVATED', '서울 중구 을지로 281')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('여의도', 1, 37.534516209715, 126.994648396583, 9, 'ACTIVATED', '서울 용산구 이태원로 지하 177')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('연남동', 1, 37.534516209715, 126.994648396583, 4, 'ACTIVATED', '서울 종로구 세종로 1-68')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('영등포 타임스퀘어', 1, 37.5716684965128, 127.010725501006, 4, 'ACTIVATED', '서울 종로구 종로 지하 302')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('용리단길', 1, 37.520256167514, 126.939837032, 2, 'ACTIVATED', '서울 영등포구 63로 50')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('이태원 앤틱가구거리', 1, 37.5439073435284, 126.899862688886, 2, 'ACTIVATED', '서울 영등포구 선유로 343')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('인사동', 1, 37.5332555663217, 126.935923268181, 2, 'ACTIVATED', '서울 영등포구 여의도동 85-2')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('창동 신경제 중심지', 1, 37.5257629325131, 126.943147274561, 2, 'ACTIVATED', '서울 영등포구 여의도동 87-2')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('청담동 명품거리', 1, 37.517948847318, 126.959147903665, 9, 'ACTIVATED', '서울 용산구 이촌동 303-18')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('청량리 제기동 일대 전통시장', 1, 37.5381510562084, 126.92575846155, 2, 'ACTIVATED', '서울 영등포구 여의도동 83-2')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('해방촌·경리단길', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('DDP(동대문디자인플라자)', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('DMC(디지털미디어시티)', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('강서한강공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('고척돔', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('광나루한강공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('광화문광장', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('국립중앙박물관·용산가족공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('난지한강공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('남산공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('노들섬', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('뚝섬한강공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('망원한강공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('반포한강공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('북서울꿈의숲', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('서리풀공원·몽마르뜨공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('서울광장', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('서울대공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('서울숲공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('아차산', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('양화한강공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('어린이대공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('여의도한강공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('월드컵공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('응봉산', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('이촌한강공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('잠실종합운동장', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('잠실한강공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('잠원한강공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('청계산', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('청와대', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('북창동 먹자골목', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('남대문시장', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('익선동', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('신정네거리역', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('잠실새내역', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('잠실역', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('잠실롯데타워 일대', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('송리단길·호수단길', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('신촌 스타광장', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('보라매공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('서대문독립공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('안양천', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('여의서로', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('올림픽공원', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
    await queryRunner.query(
      `INSERT INTO place (name, provinceIdx, x, y, locationIdx, status, address) VALUES ('홍제폭포', 1, 1, 1, 1, 'ACTIVATED', 'd')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
