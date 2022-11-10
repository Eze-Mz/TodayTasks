import { useState } from "react";

const Task = ({ task, setTasks, tasks }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [stagedTask, setStagedTask] = useState(task.title);

  const showEdit = () => {
    setToggleEdit(!toggleEdit);
  };

  const hideInput = () => {
    setToggleEdit(!toggleEdit);
    setStagedTask(task.title);
  };
  const handleEditTask = (e) => {
    if (e.isComposing || e.keyCode === 13) {
      const updatedTasks = tasks.map((item) => {
        if (item.id === task.id) {
          item.title = stagedTask;
        }
        return item;
      });
      setTasks(updatedTasks);

      console.log("save edit");
      setToggleEdit(!toggleEdit);
    }
  };

  const handleEditStatus = (e) => {
    console.log("save new status");
    const updatedTasks = tasks.map((item) => {
      if (item.id === task.id) {
        item.completed = e.target.checked;
      }
      return item;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = () => {
    console.log("delete task");
    const updatedTasks = tasks.filter((item) => !(item.id === task.id));
    setTasks(updatedTasks);
  };

  return (
    <div className="mb-4 flex" key={task.id}>
      <input
        type="checkbox"
        defaultChecked={task.completed}
        onClick={handleEditStatus}
      />

      {toggleEdit ? (
        <input
          autoFocus
          onBlur={hideInput}
          value={stagedTask}
          onChange={(e) => setStagedTask(e.target.value)}
          onKeyDown={handleEditTask}
          type="text"
          className="text-blue bg-[#eee] focus:outline-[#09f] focus:outline-1 py-px px-1 w-full ml-2"
        />
      ) : (
        <h2
          className={`ml-2 mb-1 w-full ${task.completed ? "line-through" : ""}`}
          onClick={showEdit}
        >
          {task.title}
        </h2>
      )}
      <span
        className="material-icons ml-auto cursor-pointer text-xl"
        onClick={deleteTask}
      >
        delete
      </span>
    </div>
  );
};

export default Task;
