import { createContext, useEffect, useState } from "react";

const TaskContext = createContext({
  addTask: "",
  setAddTask: () => {},
  openTask: "",
  setOpenTask: () => {},
  allTasks: "",
  setAllTasks: () => {},
});

const TaskProvider = ({ children }) => {
  const [addTask, setAddTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [openTask, setOpenTask] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  return (
    <TaskContext.Provider
      value={{
        addTask,
        setAddTask,
        openTask,
        setOpenTask,
        allTasks,
        setAllTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
