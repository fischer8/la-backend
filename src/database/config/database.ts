import { Options } from 'sequelize';
import 'dotenv/config'

const config: Options = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  dialect: 'postgres',
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
