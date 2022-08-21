import React from "react";
import TaskCard from "./TaskCard";

function TaskList({tasks, deleteTask}) {

  if (tasks.length === 0) {
    return <h1 className="font-bold text-white text-center text-3xl">No hay tareas aun</h1>;
  }

  return (
    <div className="flex flex-col items-center bg-orange-400 m-64 mt-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;