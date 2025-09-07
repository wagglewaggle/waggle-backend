import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: '',
  port: 0,
  username: '',
  password: '',
  database: 'wagglewaggle',
  synchronize: false,
  logging: false,
  entities: ['src/**/*.ts'],
  migrations: ['migrations/**/*.ts'],
});
