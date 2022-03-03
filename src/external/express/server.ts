import "reflect-metadata";
import express from "express";
import type { Application } from "express";
import bodyParser from "body-parser";
import router from "./routes/index";
import DB from "./db/db";
DB();

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.listen(5000, () => console.log("server running"));
