import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddHostCctvSrc1696147211423 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const host = `https://data.seoul.go.kr`;
    const cctvs = await queryRunner.query(`select idx as cctvIdx, src from cctv`);

    for await (const { cctvIdx, src } of cctvs) {
      const newSrc = `${host}${src}`;
      await queryRunner.query(`update cctv set src = '${newSrc}' where idx = ${cctvIdx}`);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
