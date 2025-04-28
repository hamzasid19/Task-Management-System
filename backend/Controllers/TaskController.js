import asyncHandler from "../Middleware/asyncHandler.js";
import { TaskModel } from "../Schema/TaskSchema.js";

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await TaskModel.find();
  if (tasks.length === 0) {
    res.status(404);
    throw new Error("There are no tasks available");
  }
  res.send({ tasks });
});

const createTask = asyncHandler(async (req, res) => {
  const { title, description, completed } = req.body;
  const newTask = new TaskModel({
    title,
    description,
    completed,
    userId: req.user.id,
  });
  await newTask.save();
  res.status(201).json({ message: "Task created successfully", success: true });
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await TaskModel.findByIdAndDelete(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  res.status(201).json({ message: "Task deleted successfully", success: true });
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await TaskModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  res.status(201).json({ message: "Task updated successfully", success: true });
});

const getTasksByUserId = asyncHandler(async (req, res) => {
  const tasks = await TaskModel.find({ userId: req.params.id });
  if (tasks.length === 0) {
    res.status(404);
    throw new Error("There are no tasks available for this user");
  }
  res.send({ tasks });
});

const getTaskById = asyncHandler(async (req, res) => {
  const task = await TaskModel.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }
  res.send({ task });
});

export {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
  getTasksByUserId,
  getTaskById,
};
