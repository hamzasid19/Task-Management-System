import React, { useContext, useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Lottie from "lottie-react";
import task from "../assets/task.json";
import AddTask from "../components/AddTask";
import { TaskContext } from "../context/TaskContext";
import TaskContainer from "../components/TaskContainer";

const Dashboard = () => {
  const { openTask, setOpenTask, allTasks } = useContext(TaskContext);
  const [completeDrop, setCompleteDrop] = useState(false);
  const [completed, setCompleted] = useState(null);

  const handleToggleq = () => setCompleteDrop((prev) => !prev);

  const handleOpen = () => {
    setOpenTask((open) => !open);
  };

  const handleComplete = (value) => {
    setCompleted(value);
  };

  return (
    <>
      <Container extraClasses=" px-4">
        <h1 className="font-bold text-black text-2xl">Task Management</h1>

        <div className="flex gap-2 items-center flex-wrap pt-2 relative">
          <div className="">
            <p className="text-gray-600 font-bold text-xl">Completed</p>

            <button
              onClick={handleToggleq}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md relative w-40"
            >
              {completed ? ` ${completed}` : "Select Status"}
              {completeDrop && (
                <div className="absolute top-11 left-0 w-48 bg-white shadow-md py-2 rounded-md">
                  <p
                    onClick={() => handleComplete("All Tasks")}
                    className="px-4 py-1 cursor-pointer"
                  >
                    All Tasks
                  </p>
                  <p
                    onClick={() => handleComplete("Completed")}
                    className="px-4 py-1 cursor-pointer"
                  >
                    Completed
                  </p>
                  <p
                    onClick={() => handleComplete("Not Completed")}
                    className="px-4 py-1 cursor-pointer"
                  >
                    Not Completed
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
            <TaskContainer completedFilter={completed} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
