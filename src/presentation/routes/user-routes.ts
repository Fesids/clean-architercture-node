import {Router} from 'express'
import { CreateUserController } from '../controllers/createUserController';
import { createUserFactory, getUserFactory } from '../../main/factories/userFactory';


const route = Router();

route.get("/teste", () => {console.log("teste")})
route.post("/register/:role", createUserFactory)
route.post("/login", getUserFactory)

export const userRoutes = route;