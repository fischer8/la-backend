import App from './app';
import 'express-async-errors';

const PORT = process.env.APP_PORT || 3000;
new App().start(PORT);
