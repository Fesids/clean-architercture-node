import { IUser } from "../../domain/models/user/user";
import { CreateUser, CreateUserModel } from "../../domain/usecases/create-user";
import { GetUserModel } from "../../domain/usecases/get-user";


export interface UserRepository {
    add(data: CreateUserModel): Promise<IUser>,

    get(data: GetUserModel): Promise<any>

    
}