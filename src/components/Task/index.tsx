import { useDispatch } from "react-redux";
import { selectTask } from "../../redux/modal/modalActions";
import { Task } from "../../redux/types";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const dispatch = useDispatch();
  const title = task.title;
  const subtasks = task.subtasks;
  const numberOfSubtasks = subtasks.length;
  // const numberOfCompletedSubtasks = subtasks.filter(
  //   (subtask) => subtask.isCompleted
  // ).length;
  const numberOfCompletedSubtasks = task?.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  const handleTaskClick = () => {
    dispatch(selectTask(task));
  };

  return (
    <>
      <li
        className="flex flex-col bg-white dark:bg-dark-grey text-black dark:text-white hover:text-main-purple dark:hover:text-main-purple p-4 rounded-lg cursor-pointer shadow-md max-w-[280px]"
        onClick={handleTaskClick}
      >
        <h2>{title}</h2>
        <span>{`${numberOfCompletedSubtasks} of ${numberOfSubtasks} subtasks`}</span>
      </li>
    </>
  );
};
export default TaskCard;
