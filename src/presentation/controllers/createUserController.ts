import { Features, UserRoles } from "../../domain/enums";
import { CreateUser } from "../../domain/usecases/create-user";
import { MissingParamError, ServerError } from "../errors";
import { badRequest, created, serverError } from "../helpers/http-helpers";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import bcrypt from "bcryptjs";

export class CreateUserController implements Controller {
  constructor(private readonly createUser: CreateUser) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name, email, password } = httpRequest.body;
    const { role } = httpRequest.params;

    try {
      const requiredFields = ["name", "email", "password"];

      const roleAvailables = Object.keys(UserRoles);

      roleAvailables.forEach((k) => {
        if (role != k) {
          return badRequest("Invalid role inserted");
        }
      });

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field).message);
        }
      }

      const createdDate = new Date();
      const updatedDate = new Date();

      const userFeatures: Features = {
        create_content: true,
        create_session: true,
        delete_content: true,
        edit_user: true,
        edit_content: true,
      };

      //# encrypting password
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);

      const user = await this.createUser.add({
        name: name,
        email: email,
        password: hashPassword,
        role: role,
        createdAt: createdDate,
        updatedAt: updatedDate,
        features: userFeatures,
      });
      return created(user);
    } catch (err: any) {
      return serverError(err);
    }
  }
}
