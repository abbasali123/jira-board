import { Container } from "inversify";
import { TaskInterface } from "@interfaces/tasks/tasksInterface";
import { TasksAdapter } from "@adapters/tasks/tasksAdapter";

const container = new Container({ autoBindInjectable: true });

(function (): void {
  container.bind(TaskInterface).to(TasksAdapter);
})();

export default container;
