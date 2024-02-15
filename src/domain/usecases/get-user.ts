import { IUser } from "../models/user/user"

export interface GetUserModel {
    email: string,
    
}

export interface GetUser{
    get(data: GetUserModel): Promise<any>
}