import App from './app';
import 'express-async-errors';
import 'dotenv/config'

const PORT = process.env.APP_PORT;
new App().start(Number(PORT));
