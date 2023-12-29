import { useSelector } from "react-redux";
import { selectSelectedBoard } from "../../redux/board/boardSelectors";
import TaskCard from "../../components/Task";

const Board = () => {
  const selectedBoard = useSelector(selectSelectedBoard);

  return (
    <div className="absolute flex gap-6 h-screen min-w-full transition-all sm:translate-x-[256px] lg:translate-x-[300px] py-6 px-8">
      {selectedBoard?.columns.map((column) => (
        <div key={column.id} className="flex flex-col w-[280px] h-full">
          <p className="flex items-center gap-3 pb-6 text-medium-grey font-bold text-xs uppercase">
            {`${column.name} (${column.tasks.length})`}
          </p>
          <ul className="flex flex-col gap-5">
            {column.tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Board;
