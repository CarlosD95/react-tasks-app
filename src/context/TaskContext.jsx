import React from "react";
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {


  return (
    <TaskContextProvider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContextProvider>
  );
}
