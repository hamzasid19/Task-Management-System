import express from "express";
import {
  getAllTasks,
  createTask,
  getTasksByUserId,
  updateTask,
  deleteTask,
  getTaskById,
} from "../Controllers/TaskController.js";
import ensureAuthenticated from "../Middleware/authToken.js";

const router = express.Router();

router.route("/").get(getAllTasks).post(ensureAuthenticated, createTask);

router.route("/user/:id").get(getTasksByUserId);

router.route("/:id").get(getTaskById).patch(updateTask).delete(deleteTask);

export default router;
