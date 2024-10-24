"use client";

import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Column from "../Column/page";

type Task = {
  id: string;
  title: string;
};

type Column = {
  id: string;
  title: string;
  taskIds: string[];
};

type Columns = {
  [key: string]: Column;
};

const initialTasks: { [key: string]: Task } = {
  "task-1": { id: "task-1", title: "Add tests to homepage" },
  "task-2": { id: "task-2", title: "Fix styling in about section" },
  "task-3": { id: "task-3", title: "Learn how to center a div" },
};

const initialColumns: Columns = {
  todo: {
    id: "todo",
    title: "TODO",
    taskIds: ["task-1", "task-2", "task-3"],
  },
  inProgress: {
    id: "inProgress",
    title: "IN-PROGRESS",
    taskIds: [],
  },
  done: {
    id: "done",
    title: "DONE",
    taskIds: [],
  },
};

const Base = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = columns[source.droppableId];
    const endColumn = columns[destination.droppableId];

    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
    } else {
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds,
      };

      const endTaskIds = Array.from(endColumn.taskIds);
      endTaskIds.splice(destination.index, 0, draggableId);
      const newEndColumn = {
        ...endColumn,
        taskIds: endTaskIds,
      };

      setColumns({
        ...columns,
        [newStartColumn.id]: newStartColumn,
        [newEndColumn.id]: newEndColumn,
      });
    }
  };

  return (
    <div className="font-sans box-border flex flex-col p-0 pt-2 gap-2 m-0 w-[800px]">
      <h1 className="text-3xl font-bold text-center">My Tasks</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-row gap-4">
          {Object.values(columns).map((column) => (
            <Column key={column.id} column={column} tasks={tasks} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Base;
