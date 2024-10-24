import { Draggable } from "react-beautiful-dnd";

type TaskProps = {
  task: {
    id: string;
    title: string;
  };
  index: number;
};

const Task = ({ task, index }: TaskProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-sm shadow-[0px_1px_4px_rgba(0,0,0,0.16)] w-full p-5 flex items-center justify-start gap-5 touch-none"
        >
          {task.title}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
