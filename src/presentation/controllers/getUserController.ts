import { GetUser, GetUserModel } from "../../domain/usecases/get-user";
import { badRequest, ok } from "../helpers/http-helpers";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export class GetUserController implements Controller{

    constructor(private readonly getUser: GetUser){}
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try{
            const user = await this.getUser.get(httpRequest.body);
            const {id, role, features, password} = user

            const isPasswordCorrect = bcrypt.compareSync(httpRequest.body.password, password);

            if(!isPasswordCorrect){
                return badRequest("Password is incorrect! please, check your password")
            }

            if(!user){
                return badRequest("No User Found")

            }

            const token = jwt.sign({id, role, features}, "jwtkey")

            return ok({access_token: token})


        }catch(err:any){
            return badRequest(err)
        }
    }

    
}