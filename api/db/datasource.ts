import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

// TO DO implement rule to check if it is running seed or it is running the app
const isSeed = process.env.SEED === 'true';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  port: parseInt(process.env.DB_PORT, 5432),
  database: process.env.DB_NAME || 'estadao',
  entities: !isSeed
    ? ['dist/**/*.entity{.ts,.js}']
    : ['**/**/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
