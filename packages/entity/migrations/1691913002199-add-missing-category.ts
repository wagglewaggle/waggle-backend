import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMissingCategory1691913002199 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO category (type, ktPlaceIdx) VALUES ('강변', 31)`);
    await queryRunner.query(`INSERT INTO category (type, ktPlaceIdx) VALUES ('강변', 32)`);
    await queryRunner.query(`INSERT INTO category (type, ktPlaceIdx) VALUES ('강변', 33)`);
    await queryRunner.query(`INSERT INTO category (type, ktPlaceIdx) VALUES ('강변', 38)`);
    await queryRunner.query(`INSERT INTO category (type, ktPlaceIdx) VALUES ('강변', 40)`);
    await queryRunner.query(`-- INSERT INTO category (type, ktPlaceIdx) VALUES ('강변', 48)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
