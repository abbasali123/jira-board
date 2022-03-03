import type { User } from "@schema/users";

export const UserInterface = Symbol("interfaces.users");

export interface UserInterface {
  getUsers(): Promise<User[]>;
  createUser(user: Partial<User>): Promise<void>;
}
