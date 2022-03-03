import express from "express";
import type { Application } from "express";
import tasks from "./tasks/taskRoute";
import users from "./users/userRouter";

const app: Application = express();

app.use("/tasks", tasks);
app.use("/users", users);

export default app;
