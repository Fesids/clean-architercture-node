import { UserRepository } from "../../../../data/protocols/userRepository";
import { IUser } from "../../../../domain/models/user/user";
import { CreateUserModel } from "../../../../domain/usecases/create-user";
import { GetUserModel } from "../../../../domain/usecases/get-user";
import { MongoHelper } from "../helpers/mongo-helpers";

export class UserMongoRepository implements UserRepository {
  async get(data: GetUserModel): Promise<any> {
    const userCollection = await MongoHelper.getCollection("users");
    const user = await userCollection.findOne({ email: data.email });

    return MongoHelper.map(user);
  }
  async add(data: CreateUserModel): Promise<IUser> {
    const userCollection = await MongoHelper.getCollection("users");

    const userAlreadyExists = await userCollection.findOne({
      email: data.email,
    });

    if (userAlreadyExists) {
      throw new Error("A user with this email already exists");
    }

    const insertedUser = await userCollection.insertOne(data);
    const user = await userCollection.findOne({ _id: insertedUser.insertedId });
    return MongoHelper.map(user);
  }
}
