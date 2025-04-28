import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Button from "./Button";

const TaskContainer = () => {
  const id = localStorage.getItem("id");

  const { allTasks, setAllTasks, addTask } = useContext(TaskContext);
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
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, [addTask, id]);
  return (
    <>
      {allTasks.map((task) => {
        return (
          <>
            <div className="w-full rounded-md bg-gray-100 p-4" key={task._id}>
              <h1>Title: {task.title}</h1>
              <p>Description: {task.description}</p>
              <div className="flex gap-3 ">
                <Button
                  extraClasses="w-40"
                  text="Delete"
                  handleClick={() => handleDelete(task._id)}
                />
                <Button extraClasses="w-40" text="Edit" />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TaskContainer;
