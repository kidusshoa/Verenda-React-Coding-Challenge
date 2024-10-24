"use client";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { useState } from "react";
import Column from "../Column/page";
import { GrTasks } from "react-icons/gr";
import { arrayMove } from "@dnd-kit/sortable";

function Base() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  const getTaskPos = (id: number) => {
    return tasks.findIndex((task) => task.id === id);
  };

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <div className="font-sans box-border p-0 m-0 w-[400px]">
      <h1 className="text-3xl text-center flex flex-row justify-center gap-3">
        My Tasks <GrTasks className="text-blue-500" />
      </h1>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default Base;
