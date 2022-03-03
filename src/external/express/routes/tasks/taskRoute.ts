import { Router, Request, Response } from "express";
import { GetTasks } from "@usecases/tasks/getTasks";
import container from "../../dependencies";

const router: Router = Router();

router.get("/", async (_req: Request, res: Response) => {
  const getTasks = container.resolve(GetTasks);

  const tasks = await getTasks.execute();

  return res.status(200).json(tasks);
});

export default router;
