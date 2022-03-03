import "reflect-metadata";
import express from "express";
import type { Application, Request, Response } from "express";
import { GetTasks } from "@usecases/tasks/getTasks";
import container from "./dependencies";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  console.log(req);
  res.send("hello");
});

app.get("/getTasks", async (req: Request, res: Response) => {
  console.log(req);
  const getTasks = container.resolve(GetTasks);

  const tasks = await getTasks.execute();

  return res.status(200).json(tasks);
});

app.listen(5000, () => console.log("server running"));
