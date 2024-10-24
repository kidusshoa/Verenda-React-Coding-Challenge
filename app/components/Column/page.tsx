import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Task from "../Task/page";

type Task = {
  id: number;
  title: string;
};
type ColumnProps = {
  tasks: Task[];
};

const Column = ({ tasks }: ColumnProps) => {
  return (
    <div className="bg-[#f2f2f3] rounded p-4 w-4/5 max-w-lg flex flex-col gap-4">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task id={task.id} title={task.title} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
