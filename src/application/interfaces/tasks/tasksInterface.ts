import type { Task } from "@schema/tasks";

export const TaskInterface = Symbol("interfaces.tasks");

export interface TaskInterface {
  getTasks(): Promise<Task[]>;
}
