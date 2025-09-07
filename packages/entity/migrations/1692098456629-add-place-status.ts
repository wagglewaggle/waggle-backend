import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPlaceStatus1692098456629 implements MigrationInterface {
    name = 'AddPlaceStatus1692098456629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`skt_place\` ADD \`status\` enum ('ACTIVATED', 'DEACTIVATED') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kt_place\` ADD \`status\` enum ('ACTIVATED', 'DEACTIVATED') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kt_place\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`skt_place\` DROP COLUMN \`status\``);
    }

}
