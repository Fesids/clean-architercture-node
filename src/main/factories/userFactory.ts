import {Request, Response, NextFunction} from "express"
import { UserMongoRepository } from "../../infra/db/mongodb/repositories/userRepository"
import { CreateUserController } from "../../presentation/controllers/createUserController";
import { GetUserController } from "../../presentation/controllers/getUserController";

export const getUserFactory = async (req: Request, res:Response) => {

    const userMongoRepository = new UserMongoRepository();
    const controller = new GetUserController(userMongoRepository);

    const {body, statusCode} = await controller.handle({
        body: req.body,
        params: req.params
    })

    res.status(statusCode).json(body);

}

export const createUserFactory = async (req: Request, res:Response) => {

    const userMongoRepository = new UserMongoRepository();
    const controller = new CreateUserController(userMongoRepository);

    const {body, statusCode} = await controller.handle({
        body: req.body,
        params: req.params
    })

    res.status(statusCode).json(body);

}