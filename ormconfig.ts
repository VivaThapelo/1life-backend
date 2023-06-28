import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'c-one-life.folzyk65r6mwvs.postgres.cosmos.azure.com',
  port: 5432,
  username: 'citus',
  password: 'Menu@#384',
  database: 'citus',
  entities: ['dist/migrations/*.entity{.js}'],
  migrations: ['dist/migrations/*{.js}'],
  synchronize: true,
  ssl: true,
  migrationsRun: true,
  dropSchema: true,
  logging: true,
});
