import { Router, Request, Response } from "express";
import { GetUsers } from "@usecases/users/getUsers";
import { CreateUser } from "@usecases/users/createUser";
import container from "../../dependencies";

const router: Router = Router();

router.get("/", async (_req: Request, res: Response) => {
  console.log("user");
  const getUsers = container.resolve(GetUsers);

  const users = await getUsers.execute();

  return res.status(200).json(users);
});

router.post("/", async (req: Request, res: Response) => {
  console.log("user", req.body);
  const user = container.resolve(CreateUser);

  const users = await user.execute(req.body);

  return res.status(200).json(users);
});

export default router;
