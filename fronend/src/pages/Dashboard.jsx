import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Lottie from "lottie-react";
import task from "../assets/task.json";
import AddTask from "../components/AddTask";
import { TaskContext } from "../context/TaskContext";
import TaskContainer from "../components/TaskContainer";

const Dashboard = () => {
  const { openTask, setOpenTask, allTasks } = useContext(TaskContext);
  const [priorityDrop, setPriorityDrop] = useState(false);
  const [completeDrop, setCompleteDrop] = useState(false);
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState(null);
  const [products, setProducts] = useState([]);
  const handleToggle = () => setPriorityDrop((prev) => !prev);
  const handleToggleq = () => setCompleteDrop((prev) => !prev);

  const handleOpen = () => {
    setOpenTask((open) => !open);
  };
  const handleSelect = (value) => {
    setSelected(value);
  };
  const hadleComplete = (value) => {
    setCompleted(value);
  };

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8000/api/products";
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result);
      setProducts(result);
    } catch (err) {
      handleError(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Container extraClasses=" px-4">
        <h1 className="font-bold text-black text-2xl">Task Management</h1>
        <h1>{products && products.map((product) => product.name)}</h1>
        <div className="flex gap-2 items-center flex-wrap pt-2 relative">
          <div className="">
            <p className="text-gray-600 font-bold text-xl">Priority</p>
            <button
              onClick={handleToggle}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md relative"
            >
              {selected ? `Selected: ${selected}` : "Toggle Dropdown"}
              {priorityDrop && (
                <div className="absolute top-11 left-0 w-48 bg-white shadow-md py-2 rounded-md">
                  <p
                    onClick={() => handleSelect("Link 1")}
                    className="px-4 py-1 cursor-pointer"
                  >
                    Link 1
                  </p>
                  <p
                    onClick={() => handleSelect("Link 2")}
                    className="px-4 py-1 cursor-pointer"
                  >
                    Link 2
                  </p>
                  <p
                    onClick={() => handleSelect("Link 3")}
                    className="px-4 py-1 cursor-pointer"
                  >
                    Link 3
                  </p>
                </div>
              )}
            </button>
          </div>
          <div className="">
            <p className="text-gray-600 font-bold text-xl">Completed</p>

            <button
              onClick={handleToggleq}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md relative"
            >
              {completed ? `Selected: ${completed}` : "Toggle Dropdown"}
              {completeDrop && (
                <div className="absolute top-11 left-0 w-48 bg-white shadow-md py-2 rounded-md">
                  <p
                    onClick={() => hadleComplete("Link 1")}
                    className="px-4 py-1 cursor-pointer"
                  >
                    Link 1
                  </p>
                  <p
                    onClick={() => hadleComplete("Link 2")}
                    className="px-4 py-1 cursor-pointer"
                  >
                    Link 2
                  </p>
                  <p
                    onClick={() => hadleComplete("Link 3")}
                    className="px-4 py-1 cursor-pointer"
                  >
                    Link 3
                  </p>
                </div>
              )}
            </button>
          </div>
          <Button
            text="Add Task"
            handleClick={handleOpen}
            extraClasses={"xs:w-1/6 self-end w-40 "}
          />
          {openTask && <AddTask />}
        </div>
      </Container>
      <Container extraClasses=" px-4">
        <div className="mt-6 shadow-lg w-full min-h-[60vh] max-h-[60vh] overflow-auto">
          {allTasks.length === 0 && (
            <Lottie
              className="w-1/2 h-3/4 xs:h-1/2 mx-auto mt-20 xs:mt-0"
              animationData={task}
            />
          )}
          <div className="w-full flex flex-col gap-3">
            <TaskContainer />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
