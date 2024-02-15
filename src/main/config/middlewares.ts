import {Express} from 'express'
import {bodyParser, contentType} from '../middlewares'
import cors from "cors";
import { userRoutes } from '../../presentation/routes/user-routes';

export default (app: Express): void => {
    app.use(bodyParser)
    app.use(cors())
    app.use(contentType)
    app.use("/api/v1/users", userRoutes);
}