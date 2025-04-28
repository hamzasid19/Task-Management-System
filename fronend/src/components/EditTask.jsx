import React, { useState, useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import { handleError, handleSuccess } from "../Toast/Util";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";

const EditTask = ({ task, setShowEdit, fetchTasks }) => {
  const { token } = useContext(AuthContext);
  const [form, setForm] = useState({
    title: task.title,
    description: task.description,
    completed: task.completed,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, completed } = form;
    try {
      const rest = await axios.patch(
        `http://localhost:8000/api/v1/tasks/${task._id}`,
        { title, description, completed },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setTimeout(() => {
        setShowEdit(false);
      }, 1000);
      fetchTasks();
      handleSuccess("Task Updated Successfully");
    } catch (error) {
      handleError(error.response.data.message);
    }
  };

  return (
    <>
      <div className="absolute top-40  bg-white p-4 rounded-md shadow-lg z-16 xs:w-1/2 w-full xs:left-[20%] left-0">
        <div className="">
          <h2 className="text-xl font-bold mb-4">Edit Task</h2>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <Input
              variant="text"
              data={form.title}
              inputName="title"
              handleChange={handleChange}
              placeholder="Title"
            />
            <Input
              variant="text"
              data={form.description}
              inputName="description"
              handleChange={handleChange}
              placeholder="Description"
            />
            <div className="flex items-center gap-3">
              <label htmlFor="">Completed: </label>
              <Input
                variant="checkbox"
                data={form.completed}
                inputName="completed"
                handleChange={handleChange}
              />
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <Button text="Cancel" handleClick={() => setShowEdit(false)} />
              <Button text="Update" type="submit" />
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center z-14"></div>
    </>
  );
};

export default EditTask;
