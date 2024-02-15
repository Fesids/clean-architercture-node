import { IUser } from "../models/user/user";

export interface CreateUserModel extends Omit<IUser, "id">{

}

export interface CreateUser {
    add(data: CreateUserModel): Promise<IUser>
}