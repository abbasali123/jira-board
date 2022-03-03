import { Container } from "inversify";
import { TaskInterface } from "@interfaces/tasks/tasksInterface";
import { TasksAdapter } from "@adapters/tasks/tasksAdapter";
import { UserInterface } from "@interfaces/users/userInterface";
import { UserAdapter } from "@adapters/users/usersAdapter";

const container = new Container({ autoBindInjectable: true });

(function (): void {
  container.bind(TaskInterface).to(TasksAdapter);
  container.bind(UserInterface).to(UserAdapter);
})();

export default container;
