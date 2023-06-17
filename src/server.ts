import App from './app';
import 'express-async-errors';
import 'dotenv/config'

const PORT = process.env.MYSQLPORT;
new App().start(Number(PORT));
