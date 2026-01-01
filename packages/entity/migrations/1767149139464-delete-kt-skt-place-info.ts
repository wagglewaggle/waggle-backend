import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteKtSktPlaceInfo1767149139464 implements MigrationInterface {
    name = 'DeleteKtSktPlaceInfo1767149139464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cctv\` DROP FOREIGN KEY \`FK_6914e0dbd0948c9e30574cd8f81\``);
        await queryRunner.query(`ALTER TABLE \`cctv\` DROP FOREIGN KEY \`FK_e62711bc0b3b2e02ea17d800280\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_0d8ccf87a1a02f9b9085a1b75ec\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_cf1bac7e2173b07031ed8eef4de\``);
        await queryRunner.query(`ALTER TABLE \`cctv\` DROP COLUMN \`ktPlaceIdx\``);
        await queryRunner.query(`ALTER TABLE \`cctv\` DROP COLUMN \`sktPlaceIdx\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`ktPlaceIdx\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`sktPlaceIdx\``);
        await queryRunner.query(`drop table kt_accident`);
        await queryRunner.query(`drop table kt_population`);
        await queryRunner.query(`drop table kt_road_traffic`);
        await queryRunner.query(`drop table kt_place`);
        await queryRunner.query(`drop table skt_population`);
        await queryRunner.query(`drop table skt_place`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`sktPlaceIdx\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`ktPlaceIdx\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`cctv\` ADD \`sktPlaceIdx\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`cctv\` ADD \`ktPlaceIdx\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_cf1bac7e2173b07031ed8eef4de\` FOREIGN KEY (\`ktPlaceIdx\`) REFERENCES \`kt_place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_0d8ccf87a1a02f9b9085a1b75ec\` FOREIGN KEY (\`sktPlaceIdx\`) REFERENCES \`skt_place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cctv\` ADD CONSTRAINT \`FK_e62711bc0b3b2e02ea17d800280\` FOREIGN KEY (\`ktPlaceIdx\`) REFERENCES \`kt_place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cctv\` ADD CONSTRAINT \`FK_6914e0dbd0948c9e30574cd8f81\` FOREIGN KEY (\`sktPlaceIdx\`) REFERENCES \`skt_place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
