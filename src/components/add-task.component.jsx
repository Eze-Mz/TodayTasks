import { useState } from "react";

const AddTask = ({ setTasks, tasks }) => {
  const [toggleInput, setToggleInput] = useState(false);
  const [stagedTask, setStagedTask] = useState("");

  const showInput = () => {
    setToggleInput(!toggleInput);
  };

  const hideInput = () => {
    setToggleInput(!toggleInput);
    setStagedTask("");
  };

  const uid = function () {
    return (
      Date.now().toString(36) +
      Math.floor(
        Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
      ).toString(36)
    );
  };
  const handleNewTask = (e) => {
    if (e.isComposing || e.keyCode === 13) {
      const updatedTasks = [
        ...tasks,
        {
          id: uid(),
          title: stagedTask,
          completed: false,
        },
      ];
      setTasks(updatedTasks);
      setToggleInput(!toggleInput);
      setStagedTask("");
    }
    return;
  };

  return (
    <>
      {toggleInput ? (
        <input
          autoFocus
          onBlur={hideInput}
          value={stagedTask}
          onChange={(e) => setStagedTask(e.target.value)}
          onKeyDown={handleNewTask}
          type="text"
          className="text-blue bg-[#eee] focus:outline-[#09f] focus:outline-1 py-px px-1 w-full"
        />
      ) : (
        <p onClick={showInput}>Click to add a task</p>
      )}
    </>
  );
};

export default AddTask;
