import { injectable } from "inversify";
import { TaskSchema } from "@schema/tasks";
// import { getSequelizeModelInstance } from '@helpers/getSequelizeModelInstance';
// import { convertSequelizeModelToAlertType } from './mappers';
import type { TaskInterface } from "@interfaces/tasks/tasksInterface";
import type { Task } from "@schema/tasks";

@injectable()
export class TasksAdapter implements TaskInterface {
  async getTasks(): Promise<Task[]> {
    // const sequelizeAlertTypesInstance = await getSequelizeModelInstance(
    //   'alert_type'
    // );

    // const alertTypesData = await sequelizeAlertTypesInstance.findAll();

    const tasksData = [
      {
        _id: 1,
        title: "First Task",
      },
      {
        _id: 2,
        title: "Second Task",
      },
    ];

    const tasks = tasksData.map((task) => {
      TaskSchema.validateSync(task);
      return task;
    });

    return tasks;
  }
}
