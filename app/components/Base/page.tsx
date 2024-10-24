"use client";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { useState } from "react";

function Base() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);
  return (
    <div className="font-sans box-border p-0 m-0">
      <h1>My Tasks</h1>
      <DndContext collisionDetection={closestCorners}></DndContext>
    </div>
  );
}

export default Base;
