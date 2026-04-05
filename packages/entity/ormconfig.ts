import { DataSource } from 'typeorm';

const TYPEORM_CUSTOM_MIGRATIONS = process.env.TYPEORM_CUSTOM_MIGRATIONS;
const migrationPaths = TYPEORM_CUSTOM_MIGRATIONS ? TYPEORM_CUSTOM_MIGRATIONS.split(',') : ['migrations/**/*.ts'];

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: ['src/**/*.ts'],
  migrations: migrationPaths,
});
