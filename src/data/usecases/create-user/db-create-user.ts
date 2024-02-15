import { IUser } from "../../../domain/models/user/user";
import { CreateUser, CreateUserModel } from "../../../domain/usecases/create-user";
import { UserRepository } from "../../protocols/userRepository";

export class DBCreateUser implements CreateUser{

    constructor(private readonly userRepository: UserRepository){}


    async add(data: CreateUserModel): Promise<IUser>{

        const user = await this.userRepository.add(
            Object.assign({}, data)
        )

        return user;
    }

}