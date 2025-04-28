import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Button from "./Button";
import EditTask from "./EditTask"; // import EditTask component
import { handleError, handleSuccess } from "../Toast/Util";
import { ToastContainer } from "react-toastify";

const TaskContainer = ({ completedFilter }) => {
  const id = localStorage.getItem("id");

  const { allTasks, setAllTasks, addTask, editTask, setEditTask } =
    useContext(TaskContext);
  const [showEdit, setShowEdit] = useState(false);

  const fetchTasks = async () => {
    if (id) {
      const res = await axios.get(
        `http://localhost:8000/api/v1/tasks/user/${id}`
      );
      setAllTasks(res.data.tasks);
    } else {
      setAllTasks([]);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/v1/tasks/${taskId}`
      );
      handleSuccess("Task Deleted Successfully");
      fetchTasks();
    } catch (error) {
      handleError(error.response.data.message);
    }
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setShowEdit(true);
  };
  const filteredTasks = allTasks.filter((task) => {
    if (completedFilter === "Completed") return task.completed === true;
    if (completedFilter === "Not Completed") return task.completed === false;
    return true; // "All Tasks" or null
  });
  useEffect(() => {
    fetchTasks();
  }, [addTask, id]);

  return (
    <>
      {filteredTasks.map((task) => {
        return (
          <div
            className={`w-full rounded-md  p-4 ${
              task.completed ? "bg-green-100" : "bg-red-100"
            }`}
            key={task._id}
          >
            <h1>Title: {task.title}</h1>
            <p>Description: {task.description}</p>
            {task.completed && <p>Completed</p>}
            <div className="flex gap-3">
              <Button
                extraClasses="w-40"
                text="Delete"
                handleClick={() => handleDelete(task._id)}
              />
              <Button
                extraClasses="w-40"
                text="Edit"
                handleClick={() => handleEdit(task)}
              />
            </div>
            <ToastContainer />
          </div>
        );
      })}
      {showEdit && (
        <EditTask
          task={editTask}
          setTasks={setAllTasks}
          setShowEdit={setShowEdit}
          fetchTasks={fetchTasks}
        />
      )}
    </>
  );
};

export default TaskContainer;
