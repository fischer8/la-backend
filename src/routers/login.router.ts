import { Router } from "express"
import { validateLogin, validateNewAccount } from '../middlewares'
import { LoginController } from "../controllers";

const loginRouter = Router();


loginRouter.get('/',(req, res)=>{
  return res.status(200).json('oi')
})
loginRouter.post('/login', validateLogin, LoginController.login);
loginRouter.post('/create-account', validateNewAccount, LoginController.createAccount)

loginRouter.get('/oi',(req, res)=>{
  return res.status(200).json('oi')
})

export default loginRouter;