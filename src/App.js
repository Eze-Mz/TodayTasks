import React from "react";

import { initStorage } from "./utils.js";
import TaskContainer from "./components/tasks-container.component.jsx";

const App = () => {
  /*   constructor() {
    super();
    const tasks = localStorage.getItem("tasks");
    if (!tasks) {
      initStorage();
    }
    this.state = {
      idTaskToEdit: null,
      editing: false,
      taskTitle: "",
      tasks: [],
    };
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.setState(() => {
        return { tasks };
      });
    }

    //react to changes if the user opened two tabs
    window.addEventListener("storage", () => {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState(() => {
        return { tasks };
      });
    });
  }

  //remove windows eventLitener
  componentWillUnmount() {
    window.removeEventListener("storage");
  }

  changeTaskTitle = (e) => {
    const taskTitle = e.target.value;
    this.setState(() => {
      return { taskTitle };
    });
  };

  deleteTask = (id) => {
    let { tasks } = this.state;
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    const tasksIds = filteredTasks.map((task) => {
      task.id = filteredTasks.indexOf(task) + 1;
      return task;
    });

    this.setState(() => {
      return { tasks: tasksIds };
    });

    localStorage.setItem("tasks", JSON.stringify([...tasksIds]));
  };

  addTask = () => {
    let { tasks, taskTitle } = this.state;

    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      completed: false,
    };

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

    this.setState((prev) => {
      return { tasks: [...prev.tasks, newTask] };
    });
  };

  editTask = (task) => {
    this.setState({ editing: true });
    this.setState({ idTaskToEdit: task.id });
  }; */

  return (
    <React.StrictMode>
      <TaskContainer />
    </React.StrictMode>
  );
};

export default App;
