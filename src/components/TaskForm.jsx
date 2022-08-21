import React from "react";
import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });

    settitle("");
    setDescription("");
  };

  return (
    <div> 
    <h1 className="font-bold text-white text-center text-3xl">Agrega tus tareas:</h1>
    <form onSubmit={handleSubmit} className="flex m-3 mb-6 bg-blue-500 justify-center">
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          settitle(e.target.value);
        }}
        value={title}
        autoFocus
        className="w-1/3 p-2 m-6 text-center rounded-lg text-lg"
      />
      <button className="bg-teal-900 p-5 m-6 rounded-lg text-slate-100">ENVIAR</button>
      <textarea className="rounded-lg text-center w-1/3 p-2 m-6 text-lg justify-center"
        placeholder="Escribe descripcion "
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
    </form>
    </div>
  );
}

export default TaskForm;
