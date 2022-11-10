import TaskList from "./task-list.component.jsx";

const TaskContainer = () => {
  return (
    <div className="container">
      <h1 className="text-primary text-4xl font-bold">Today's tasks</h1>
      <TaskList />
    </div>
  );
};

export default TaskContainer;
