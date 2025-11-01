import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixKtPlacePos1696595405787 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`UPDATE kt_place SET x = 37.5568477643586, y = 126.923770663398 WHERE idx = 51`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5252461813568, y = 126.936886048301 WHERE idx = 52`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5377988975503, y = 126.902956932478 WHERE idx = 53`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5499216550352, y = 126.914365220924 WHERE idx = 54`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5176308882022, y = 126.958132858968 WHERE idx = 55`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5273067501807, y = 127.019254867469 WHERE idx = 56`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5627611476845, y = 126.885468703595 WHERE idx = 57`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5801431466092, y = 126.968527417705 WHERE idx = 58`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5637425675635, y = 126.923656112031 WHERE idx = 59`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5822916920727, y = 127.001885012809 WHERE idx = 60`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5471928192926, y = 127.047589805912 WHERE idx = 61`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5657113246588, y = 126.977848935338 WHERE idx = 62`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5397778862741, y = 126.991762703936 WHERE idx = 63`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5345538098826, y = 126.973089228331 WHERE idx = 64`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5864516449743, y = 126.974983978754 WHERE idx = 65`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5883383381822, y = 126.813272482285 WHERE idx = 66`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5335205934954, y = 126.994427844302 WHERE idx = 67`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5314226251013, y = 126.972199399135 WHERE idx = 68`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5654940507047, y = 126.972888511313 WHERE idx = 69`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5267167204688, y = 127.1047950771 WHERE idx = 70`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5260379627442, y = 127.04598973117 WHERE idx = 71`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5061458729522, y = 127.023702700042 WHERE idx = 72`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.4846182332966, y = 127.034250648485 WHERE idx = 73`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5507250606198, y = 127.080268791812 WHERE idx = 74`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5507250606198, y = 127.080268791812 WHERE idx = 75`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.534516209715, y = 126.994648396583 WHERE idx = 76`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.534516209715, y = 126.994648396583 WHERE idx = 77`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5716684965128, y = 127.010725501006 WHERE idx = 78`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.520256167514, y = 126.939837032 WHERE idx = 79`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5439073435284, y = 126.899862688886 WHERE idx = 80`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5332555663217, y = 126.935923268181 WHERE idx = 81`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5257629325131, y = 126.943147274561 WHERE idx = 82`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.517948847318, y = 126.959147903665 WHERE idx = 83`);
    await queryRunner.query(`UPDATE kt_place SET x = 37.5381510562084, y = 126.92575846155 WHERE idx = 84`);
    // await queryRunner.query(`UPDATE kt_place SET x = 37.514056713371, y = 126.948178275855 WHERE idx = 85`);
    // await queryRunner.query(`UPDATE kt_place SET x = 37.5065330557593, y = 126.958950546187 WHERE idx = 86`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
