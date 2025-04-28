import { createContext, useEffect, useState } from "react";

const TaskContext = createContext({
  addTask: "",
  setAddTask: () => {},
  openTask: "",
  setOpenTask: () => {},
  allTasks: "",
  setAllTasks: () => {},
  editTask: "",
  setEditTask: () => {},
});

const TaskProvider = ({ children }) => {
  const [addTask, setAddTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [openTask, setOpenTask] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
    completed: null,
  });
  return (
    <TaskContext.Provider
      value={{
        addTask,
        setAddTask,
        openTask,
        setOpenTask,
        allTasks,
        setAllTasks,
        editTask,
        setEditTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
