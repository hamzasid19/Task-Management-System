import React, { useContext } from "react";
import Button from "./Button";
import { TaskContext } from "../context/TaskContext";
import Input from "./Input";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../Toast/Util";

const AddTask = () => {
  const { addTask, setAddTask, setOpenTask } = useContext(TaskContext);

  const handleClose = () => {
    setOpenTask(false);
    setAddTask({
      title: "",
      description: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:8000/api/v1/tasks", addTask, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        handleSuccess("Task Created Successfully");
        setTimeout(() => {
          handleClose();
        }, 1000);
      })
      .catch((err) => {
        handleError(err.response.data.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddTask((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="absolute top-20  bg-white p-4 rounded-md shadow-lg z-15 xs:w-1/2 w-full xs:left-[20%] left-0">
        <h1 className="font-bold text-xl mb-4">Add Task</h1>
        <form onSubmit={handleSubmit}>
          <Input
            variant="text"
            data={addTask.title}
            inputName="title"
            handleChange={handleChange}
            placeholder="Title"
          />
          <Input
            variant="text"
            data={addTask.description}
            inputName="description"
            handleChange={handleChange}
            placeholder="Description"
          />
          <div className="flex gap-2">
            <Button text="Add Task" />
            <Button text="Cancel" handleClick={handleClose} />
          </div>
        </form>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center z-14"></div>
      <ToastContainer />
    </>
  );
};

export default AddTask;
