import { MigrationInterface, QueryRunner } from 'typeorm';

export class SplitCategoryType1695986079652 implements MigrationInterface {
  name = 'SplitCategoryType1695986079652';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`category\` CHANGE \`type\` \`typeIdx\` enum ('테마파크', '쇼핑몰', '공원', '골목 및 거리', '궁궐', '지하철', '마을', '크리스마스 핫플', '한강', '강변', '해변', '봄 나들이', '기타 지역') NOT NULL`,
    );
    await queryRunner.query(
      `CREATE TABLE \`category_type\` (\`idx\` int NOT NULL, \`type\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_73f0d2a71d9024b4db4eabc855\` (\`type\`), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`typeIdx\``);
    await queryRunner.query(`ALTER TABLE \`category\` ADD \`typeIdx\` int NULL`);
    await queryRunner.query(
      `ALTER TABLE \`category\` ADD CONSTRAINT \`FK_bbddc3ae486b9c3bb5c15e91953\` FOREIGN KEY (\`typeIdx\`) REFERENCES \`category_type\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );

    await queryRunner.query(`delete from category`);

    await queryRunner.query(`INSERT INTO category_type (idx, type) VALUES (1, '놀이공원')`);
    await queryRunner.query(`INSERT INTO category_type (idx, type) VALUES (2, '쇼핑몰')`);
    await queryRunner.query(`INSERT INTO category_type (idx, type) VALUES (3, '공원')`);
    await queryRunner.query(`INSERT INTO category_type (idx, type) VALUES (4, '한강')`);
    await queryRunner.query(`INSERT INTO category_type (idx, type) VALUES (5, '관광 명소')`);
    await queryRunner.query(`INSERT INTO category_type (idx, type) VALUES (6, '지하철')`);
    await queryRunner.query(`INSERT INTO category_type (idx, type) VALUES (7, '거리')`);
    await queryRunner.query(`INSERT INTO category_type (idx, type) VALUES (8, '복합문화공간')`);
    await queryRunner.query(`INSERT INTO category_type (idx, type) VALUES (9, '불꽃축제')`);
    await queryRunner.query(`INSERT INTO category_type (idx, type) VALUES (10, '경기장')`);

    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 36, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (10, 37, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 37, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (9, 37, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (9, 29, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 29, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 31, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (4, 31, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 32, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (4, 32, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (9, 32, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 33, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (4, 33, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (9, 33, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 38, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (4, 38, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (9, 38, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 40, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (4, 40, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (5, 7, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (5, 9, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 10, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 12, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 18, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (9, 18, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 11, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 16, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 19, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 20, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (7, 4, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (7, 23, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (7, 24, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 27, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (7, 28, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (7, 2, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 21, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (7, 21, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (1, 35, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 35, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (5, 8, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (7, 8, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (5, 22, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (7, 22, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 30, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (9, 30, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (5, 30, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (2, 1, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (8, 1, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (4, 5, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (7, 5, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 6, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (7, 3, null)`);
    // await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 41, null)`);
    // await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 44, null)`);
    // await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (3, 45, null)`);
    // await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 45, null)`);
    // await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 48, null)`);
    // await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (9, 48, null)`);
    // await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (9, 44, null)`);
    // await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (2, 49, null)`);
    // await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (6, 49, null)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (1, null, 2)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (1, null, 19)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (2, null, 4)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (2, null, 16)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (8, null, 4)`);
    await queryRunner.query(`INSERT INTO category (typeIdx, ktPlaceIdx, sktPlaceIdx) VALUES (8, null, 16)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_bbddc3ae486b9c3bb5c15e91953\``);
    await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`typeIdx\``);
    await queryRunner.query(
      `ALTER TABLE \`category\` ADD \`typeIdx\` enum ('테마파크', '쇼핑몰', '공원', '골목 및 거리', '궁궐', '지하철', '마을', '크리스마스 핫플', '한강', '강변', '해변', '봄 나들이', '기타 지역') NOT NULL`,
    );
    await queryRunner.query(`DROP INDEX \`IDX_73f0d2a71d9024b4db4eabc855\` ON \`category_type\``);
    await queryRunner.query(`DROP TABLE \`category_type\``);
    await queryRunner.query(
      `ALTER TABLE \`category\` CHANGE \`typeIdx\` \`type\` enum ('테마파크', '쇼핑몰', '공원', '골목 및 거리', '궁궐', '지하철', '마을', '크리스마스 핫플', '한강', '강변', '해변', '봄 나들이', '기타 지역') NOT NULL`,
    );
  }
}
