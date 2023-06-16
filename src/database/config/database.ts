import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'e22433fwk',
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST || '0.0.0.0',
  port: Number(process.env.MYSQLPORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
