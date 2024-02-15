import { Features, UserRoles } from "../../enums";

export interface IUser {
    id: string,
    name: string,
    email:string,
    password:string;
    createdAt: Date;
    updatedAt:Date;
    role: UserRoles;
    features: Features
}