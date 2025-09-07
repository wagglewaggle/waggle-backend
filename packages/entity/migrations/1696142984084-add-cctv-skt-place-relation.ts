import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCctvSktPlaceRelation1696142984084 implements MigrationInterface {
  name = 'AddCctvSktPlaceRelation1696142984084';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const ktPlacesMappingIdx = await queryRunner.query(`select idx as cctvIdx, placeIdx as ktPlaceIdx from cctv`);

    await queryRunner.query(`ALTER TABLE \`cctv\` DROP FOREIGN KEY \`FK_7e0e317412971c3b2b4208868a2\``);
    await queryRunner.query(`ALTER TABLE \`cctv\` DROP COLUMN \`placeIdx\``);
    await queryRunner.query(`ALTER TABLE \`cctv\` ADD \`ktPlaceIdx\` int NULL`);
    await queryRunner.query(`ALTER TABLE \`cctv\` ADD \`sktPlaceIdx\` int NULL`);
    await queryRunner.query(
      `ALTER TABLE \`cctv\` ADD CONSTRAINT \`FK_e62711bc0b3b2e02ea17d800280\` FOREIGN KEY (\`ktPlaceIdx\`) REFERENCES \`kt_place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`cctv\` ADD CONSTRAINT \`FK_6914e0dbd0948c9e30574cd8f81\` FOREIGN KEY (\`sktPlaceIdx\`) REFERENCES \`skt_place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );

    for await (const { cctvIdx, ktPlaceIdx } of ktPlacesMappingIdx) {
      await queryRunner.query(`update cctv set ktPlaceIdx = ${ktPlaceIdx} where idx = ${cctvIdx}`);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`cctv\` DROP FOREIGN KEY \`FK_6914e0dbd0948c9e30574cd8f81\``);
    await queryRunner.query(`ALTER TABLE \`cctv\` DROP FOREIGN KEY \`FK_e62711bc0b3b2e02ea17d800280\``);
    await queryRunner.query(`ALTER TABLE \`cctv\` DROP COLUMN \`sktPlaceIdx\``);
    await queryRunner.query(`ALTER TABLE \`cctv\` DROP COLUMN \`ktPlaceIdx\``);
    await queryRunner.query(`ALTER TABLE \`cctv\` ADD \`placeIdx\` int NULL`);
    await queryRunner.query(
      `ALTER TABLE \`cctv\` ADD CONSTRAINT \`FK_7e0e317412971c3b2b4208868a2\` FOREIGN KEY (\`placeIdx\`) REFERENCES \`kt_place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
