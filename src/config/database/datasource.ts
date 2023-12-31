import { PersonEntity } from "src/modules/person/person.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config"

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'dpg-ck80smfsasqs73ck817g-a.singapore-postgres.render.com',
  username: 'gabe',
  password: process.env.DB_PW,
  database: 'harvest_moon_db',
  entities: [
    PersonEntity,
  ],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  synchronize: true,
  logging: true,
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
