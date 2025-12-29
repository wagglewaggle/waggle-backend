import { MigrationInterface, QueryRunner } from "typeorm";

export class AddJobLogEntity1766985878508 implements MigrationInterface {
    name = 'AddJobLogEntity1766985878508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`job_log\` (\`idx\` bigint NOT NULL AUTO_INCREMENT, \`workerId\` varchar(100) NOT NULL, \`comment\` text NOT NULL, \`duration\` double NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`job_log\``);
    }

}
