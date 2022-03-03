import { inject, injectable } from "inversify";
import { TaskInterface } from "@interfaces/tasks/tasksInterface";
import { Task } from "@schema/tasks";

@injectable()
export class GetTasks {
  @inject(TaskInterface) taskInterface!: TaskInterface;

  async execute(): Promise<Task[]> {
    return this.taskInterface.getTasks();
  }
}
