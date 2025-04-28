import mongoose from "mongoose";

const AddTaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const TaskModel = mongoose.model("tasks", AddTaskSchema);

export { TaskModel };
