import { useState } from "react";
import { createContext } from "react";

export const todocontext = createContext(null);

const TasksContext = (props) => {
  const [tasks, settasks] = useState([{ title: "Task 1", completed: false }]);
  return (
    <todocontext.Provider value={[tasks, settasks]}>
    {props.children}
</todocontext.Provider>
  )
}

export default TasksContext