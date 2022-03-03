import { injectable } from "inversify";
import { UserSchema } from "@schema/users";
import type { User } from "@schema/users";
// import { getSequelizeModelInstance } from '@helpers/getSequelizeModelInstance';
// import { convertSequelizeModelToAlertType } from './mappers';
import type { UserInterface } from "@interfaces/users/userInterface";
import UserModel from "@models/users";
import { schemaSubset } from "@helpers/model";

@injectable()
export class UserAdapter implements UserInterface {
  async getUsers(): Promise<User[]> {
    const userData = await UserModel.find();
    const users = userData.map((user) => {
      UserSchema.validateSync(user);
      return user;
    });
    return users;
  }

  async createUser(user: Partial<User>): Promise<void> {
    const userSchemaSubset = schemaSubset(UserSchema, Object.keys(user));

    await userSchemaSubset.validate(user);

    const createUser = new UserModel(user);

    await createUser.save();
    return;
  }
}
