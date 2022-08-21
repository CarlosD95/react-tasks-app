import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import {useState, useEffect} from 'react'
import {tasks as data } from './data/Tasks'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <body className="bg-slate-900 h-full w-full m-0 font-light ">
      <div >
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
    </body>
    
  );
}

export default App;
