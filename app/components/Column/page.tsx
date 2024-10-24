import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/page";

type Task = {
  id: string;
  title: string;
};

type ColumnProps = {
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
  tasks: { [key: string]: Task };
};

const Column = ({ column, tasks }: ColumnProps) => {
  return (
    <div className="bg-[#f2f2f3] rounded p-4 w-1/3 max-w-lg flex flex-col gap-4">
      <h2 className="font-bold text-lg">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-col gap-2"
          >
            {column.taskIds.map((taskId, index) => (
              <Task key={taskId} task={tasks[taskId]} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
