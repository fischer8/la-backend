import { Router } from "express"
import { validateLogin, validateNewAccount } from '../middlewares'
import { LoginController } from "../controllers";

const loginRouter = Router();

loginRouter.post('/login', validateLogin, LoginController.login);
loginRouter.post('/create-account', validateNewAccount, LoginController.createAccount)

export default loginRouter;