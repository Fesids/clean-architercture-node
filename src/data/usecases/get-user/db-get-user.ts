import { IUser } from "../../../domain/models/user/user";
import { GetUser, GetUserModel } from "../../../domain/usecases/get-user";
import { UserRepository } from "../../protocols";

export class DBGetUser implements GetUser{

    constructor(private readonly userRepository: UserRepository){}

    async get(data: GetUserModel): Promise<any> {
        const user = (await this.userRepository.get(data))

        if (!user){
            return {}
        }

        return user;
    }


}