import { MigrationInterface, QueryRunner } from "typeorm";

export class IntegratePlaceInfoTable1767146958896 implements MigrationInterface {
    name = 'IntegratePlaceInfoTable1767146958896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`place_population\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`level\` enum ('RELAXATION', 'NORMAL', 'CROWDED', 'VERY_CROWDED') NOT NULL, \`message\` text NOT NULL, \`male\` int NOT NULL, \`female\` int NOT NULL, \`zeroGen\` int NOT NULL, \`teenager\` int NOT NULL, \`twenties\` int NOT NULL, \`thirties\` int NOT NULL, \`forties\` int NOT NULL, \`fifties\` int NOT NULL, \`sixties\` int NOT NULL, \`seventies\` int NOT NULL, \`resident\` int NOT NULL, \`nonResident\` int NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`placeIdx\` int NULL, UNIQUE INDEX \`REL_fddf17c88447b57128899b393d\` (\`placeIdx\`), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place_road_traffic\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`info\` text NOT NULL, \`type\` varchar(255) NOT NULL, \`avgSpeed\` int NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`placeIdx\` int NULL, UNIQUE INDEX \`REL_ff88e71e291f3ad36ab1088a94\` (\`placeIdx\`), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place_accident\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`type\` varchar(255) NOT NULL, \`dtype\` varchar(255) NOT NULL, \`info\` text NOT NULL, \`x\` double NOT NULL, \`y\` double NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`placeIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`x\` double NOT NULL, \`y\` double NOT NULL, \`address\` varchar(255) NOT NULL, \`status\` enum ('ACTIVATED', 'DEACTIVATED') NOT NULL, \`provinceIdx\` int NULL, \`locationIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cctv\` ADD \`placeIdx\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`placeIdx\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`place_population\` ADD CONSTRAINT \`FK_fddf17c88447b57128899b393d2\` FOREIGN KEY (\`placeIdx\`) REFERENCES \`place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place_road_traffic\` ADD CONSTRAINT \`FK_ff88e71e291f3ad36ab1088a94d\` FOREIGN KEY (\`placeIdx\`) REFERENCES \`place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place_accident\` ADD CONSTRAINT \`FK_343f4ff77f048e4dad3a5b21eb3\` FOREIGN KEY (\`placeIdx\`) REFERENCES \`place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_2832991bcf3a8c16cbf9cfde165\` FOREIGN KEY (\`provinceIdx\`) REFERENCES \`province\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_954e20fc87355fe27a810f7a271\` FOREIGN KEY (\`locationIdx\`) REFERENCES \`location\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cctv\` ADD CONSTRAINT \`FK_7e0e317412971c3b2b4208868a2\` FOREIGN KEY (\`placeIdx\`) REFERENCES \`place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_3545da600d119f447848163f95b\` FOREIGN KEY (\`placeIdx\`) REFERENCES \`place\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_3545da600d119f447848163f95b\``);
        await queryRunner.query(`ALTER TABLE \`cctv\` DROP FOREIGN KEY \`FK_7e0e317412971c3b2b4208868a2\``);
        await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_954e20fc87355fe27a810f7a271\``);
        await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_2832991bcf3a8c16cbf9cfde165\``);
        await queryRunner.query(`ALTER TABLE \`place_accident\` DROP FOREIGN KEY \`FK_343f4ff77f048e4dad3a5b21eb3\``);
        await queryRunner.query(`ALTER TABLE \`place_road_traffic\` DROP FOREIGN KEY \`FK_ff88e71e291f3ad36ab1088a94d\``);
        await queryRunner.query(`ALTER TABLE \`place_population\` DROP FOREIGN KEY \`FK_fddf17c88447b57128899b393d2\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`placeIdx\``);
        await queryRunner.query(`ALTER TABLE \`cctv\` DROP COLUMN \`placeIdx\``);
        await queryRunner.query(`DROP TABLE \`place\``);
        await queryRunner.query(`DROP TABLE \`place_accident\``);
        await queryRunner.query(`DROP INDEX \`REL_ff88e71e291f3ad36ab1088a94\` ON \`place_road_traffic\``);
        await queryRunner.query(`DROP TABLE \`place_road_traffic\``);
        await queryRunner.query(`DROP INDEX \`REL_fddf17c88447b57128899b393d\` ON \`place_population\``);
        await queryRunner.query(`DROP TABLE \`place_population\``);
    }

}
