import React from "react";

function TaskCard({ task , deleteTask}) {

  return (
    <div className="p-5  m-2 text-center rounded-lg bg-green-800 w-1/2" >
      <h1 className="font-bold text-white text-4xl break-all">{task.title}</h1>
      <p className="italic text-white text-xl mt-10 break-all" >{task.description}</p>
      <button className="bg-red-700 rounded-lg text-white mt-10 text-lg font-bold p-3" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;