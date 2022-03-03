import { inject, injectable } from "inversify";
import { UserInterface } from "@interfaces/users/userInterface";
import type { User } from "@schema/users";
@injectable()
export class CreateUser {
  @inject(UserInterface) userInterface!: UserInterface;

  async execute(user: Partial<User>): Promise<void> {
    return this.userInterface.createUser(user);
  }
}
