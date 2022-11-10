import { useEffect, useState } from "react";
import { useLocalStorage } from "../custom-hooks/useLocalStorage.js";
import AddTask from "./add-task.component.jsx";
import Task from "./task.component.jsx";

const TaskList = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  return (
    <div className="mt-4">
      {tasks.map((task) => {
        return (
          <Task task={task} tasks={tasks} setTasks={setTasks} key={task.id} />
        );
      })}
      <AddTask setTasks={setTasks} tasks={tasks} />
    </div>
  );
};

export default TaskList;
