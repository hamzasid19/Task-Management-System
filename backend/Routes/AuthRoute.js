import express from "express";
import {
  loginValidation,
  registerValidation,
} from "../Middleware/authValidation.js";
import { loginUser, registerUser } from "../Controllers/UserController.js";

const apiRouter = express.Router();

apiRouter.post("/register", registerValidation, registerUser);

apiRouter.post("/login", loginValidation, loginUser);

export default apiRouter;
