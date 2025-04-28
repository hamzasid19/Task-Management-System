import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./Connection/Db.js";
import AuthRoute from "./Routes/AuthRoute.js";
import TaskRoute from "./Routes/TaskRoute.js";
import AuthTokenRoute from "./Routes/AuthTokenRoute.js";
import cors from "cors";
import { errorHandler, notFound } from "./Middleware/errorHandler.js";
dotenv.config();

const app = express();

connectDb();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", AuthRoute);
app.use("/api", AuthTokenRoute);
app.use("/api/v1/tasks", TaskRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
