import { inject, injectable } from "inversify";
import { UserInterface } from "@interfaces/users/userInterface";
import { User } from "@schema/users";

@injectable()
export class GetUsers {
  @inject(UserInterface) userInterface!: UserInterface;

  async execute(): Promise<User[]> {
    return this.userInterface.getUsers();
  }
}
