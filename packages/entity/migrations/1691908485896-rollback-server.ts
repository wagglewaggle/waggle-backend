import { MigrationInterface, QueryRunner } from "typeorm";

export class RollbackServer1691908485896 implements MigrationInterface {
    name = 'RollbackServer1691908485896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_c7f0679933896964175621cf29\` ON \`kt_population\``);
        await queryRunner.query(`DROP INDEX \`IDX_e34967ef88f650b158efee2bb7\` ON \`skt_population\``);
        await queryRunner.query(`ALTER TABLE \`skt_place\` ADD \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kt_place\` ADD \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`type\` \`type\` enum ('테마파크', '쇼핑몰', '공원', '골목 및 거리', '궁궐', '지하철', '마을', '크리스마스 핫플', '한강', '강변', '해변', '봄 나들이', '기타 지역') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`type\` \`type\` enum ('테마파크', '쇼핑몰', '공원', '골목 및 거리', '궁궐', '지하철', '마을', '크리스마스 핫플', '한강') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kt_place\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`skt_place\` DROP COLUMN \`address\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_e34967ef88f650b158efee2bb7\` ON \`skt_population\` (\`placeIdx\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_c7f0679933896964175621cf29\` ON \`kt_population\` (\`placeIdx\`)`);
    }x

}
