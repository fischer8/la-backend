import { Options } from 'sequelize';
import 'dotenv/config'

const config: Options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
    connectionString: process.env.DB_URL + "?sslmode=require",
  },
  logging: false,
}

module.exports = config;
