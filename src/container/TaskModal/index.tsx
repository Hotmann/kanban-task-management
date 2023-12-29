// TaskModal.js
import { useEffect, useState } from "react";
import { ReactComponent as Bar } from "../../assets/icon-vertical-ellipsis.svg";
import DropDown from "../../components/DropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSubtask,
  updateTaskStatus,
} from "../../redux/modal/modalActions";
import { Subtask } from "../../redux/types";
import { showModal } from "../../redux/modal/modalSelectors";
import Status from "../../components/Status";
import { selectSelectedBoard } from "../../redux/board/boardSelectors";
import Modal from "../../components/Modal";

const TaskModal = () => {
  const [show, setShow] = useState(false);
  const selectedTask = useSelector(showModal);
  const selectedBoard = useSelector(selectSelectedBoard);
  const dispatch = useDispatch();
  const numberOfSubtasks = selectedTask?.subtasks.length;
  const numberOfCompletedSubtasks = selectedTask?.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;

  const updatedTask = useSelector(showModal);

  // Check if the selected task has changed, and update the component state accordingly
  useEffect(() => {
    console.log(updatedTask, selectedTask, selectedBoard?.columns);
    if (updatedTask !== selectedTask) {
      setShow(false); // Reset the dropdown state
    }
  }, [updatedTask, selectedTask]);

  const toggleCheck = (subtask: Subtask) => {
    const updatedSubtask = { ...subtask, isCompleted: !subtask.isCompleted };
    dispatch(updateSubtask(updatedSubtask));
  };
  const handleStatusUpdate = (newStatus: string) => {
    dispatch(updateTaskStatus(newStatus));
  };

  useEffect(() => {
    // Dispatch the action asynchronously
    // const toggleCheck = (subtask: Subtask) => {
    //   const updatedSubtask = { ...subtask, isCompleted: !subtask.isCompleted };
    //   dispatch(updateSubtask(updatedSubtask));
    // };
    // const handleStatusUpdate = (newStatus: string) => {
    //   dispatch(updateTaskStatus(newStatus));
    // };
  }, [dispatch]);

  return (
    <Modal>
      <div className="flex justify-between">
        <h2 className="font-bold text-lg">{selectedTask?.title}</h2>
        <div className="cursor-pointer relative">
          <Bar onClick={() => setShow((prev) => !prev)} />
          <DropDown show={show} />
        </div>
      </div>
      <div>
        <p className="text-medium-grey dark:text-white text-xs font-bold pb-4">{`Subtasks (${numberOfCompletedSubtasks} of ${numberOfSubtasks})`}</p>
        <div className="flex flex-col gap-2">
          {selectedTask?.subtasks.map((subtask, id) => (
            <label
              key={id}
              className={`flex items-center gap-4 bg-light-grey dark:bg-dark-grey dark:hover:bg-main-purple/25 p-3 rounded cursor-pointer text-xs font-bold ${
                subtask.isCompleted
                  ? "text-black/50 dark:text-white/50 text-xs font-bold line-through"
                  : "line-none"
              }`}
              htmlFor={subtask.title}
            >
              <input
                className="border-none"
                type="checkbox"
                id={subtask.title}
                checked={subtask.isCompleted}
                onChange={() => toggleCheck(subtask)}
              />
              {subtask.title}
            </label>
          ))}
        </div>
      </div>
      <div>
        <p className="text-medium-grey dark:text-white text-xs font-bold pb-4">
          Current Status
        </p>
        <Status
          currentStatus={selectedTask?.status || ""}
          onUpdateStatus={handleStatusUpdate}
        />
      </div>
    </Modal>
  );
};

export default TaskModal;
