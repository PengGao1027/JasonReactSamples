import React from "react";
import "./Column.css";
import Task from "./Task";
import { useBearStore } from "../store/MyStore";

interface MyStateObject {
  myState: string;
}

function Column(myStateObject: MyStateObject) {
  console.log(myStateObject.myState);

  const tasks = useBearStore((store) => store.tasks);

  return (
    <div className="column">
      <p>{myStateObject.myState}</p>
      <Task title="Todo"></Task>
    </div>
  );
}

export default Column;
