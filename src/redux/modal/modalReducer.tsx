// modalReducer.js
import {
  ModalActionTypes,
  SELECT_TASK,
  UPDATE_SUBTASK,
  UPDATE_TASK_STATUS,
} from "./modalTypes";
import { Task, Column } from "../types";
import { selectBoard } from "../board/boardActions";
import { useDispatch } from "react-redux";

export interface ModalState {
  selectedTask: Task | null;
}

const initialState: ModalState = {
  selectedTask: null,
};

// export const latestBoard = (localStorage.getItem("Board") || "{}")
const modalReducer = (
  state = initialState,
  action: ModalActionTypes
): ModalState => {
  // const dispatch = useDispatch();
  const { selectedTask } = state;
  switch (action.type) {
    case SELECT_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };

    case UPDATE_SUBTASK:
      const updatedSubtask = action.payload;

      if (!selectedTask) {
        // If there's no selected task, return the current state
        return state;
      }

      const updatedBoard = {
        ...JSON.parse(localStorage.getItem("Board") || "{}"),
        columns: (
          JSON.parse(localStorage.getItem("Board") || "{}").columns || []
        ).map((column: Column) => ({
          ...column,
          tasks: column.tasks.map((task) =>
            task.id === selectedTask.id
              ? {
                  ...task,
                  subtasks: task.subtasks.map((subtask) =>
                    subtask.title === updatedSubtask?.title
                      ? { ...subtask, isCompleted: !subtask.isCompleted }
                      : subtask
                  ),
                }
              : task
          ),
        })),
      };
      localStorage.setItem("Board", JSON.stringify(updatedBoard));

      return {
        ...state,
        selectedTask: {
          ...selectedTask,
          subtasks: selectedTask.subtasks.map((subtask) =>
            subtask.title === updatedSubtask?.title
              ? { ...subtask, isCompleted: !subtask.isCompleted }
              : subtask
          ),
        },
      };

    case UPDATE_TASK_STATUS:
      const newStatus = action.payload;

      if (!selectedTask) {
        return state;
      }

      const updatedBoardWithStatus = {
        ...JSON.parse(localStorage.getItem("Board") || "{}"),
        columns: (
          JSON.parse(localStorage.getItem("Board") || "{}").columns || []
        ).map((column: Column) => ({
          ...column,
          tasks: column.tasks.map((task) =>
            task.id === selectedTask.id ? { ...task, status: newStatus } : task
          ),
        })),
      };
      localStorage.setItem("Board", JSON.stringify(updatedBoardWithStatus));

      return {
        ...state,
        selectedTask: {
          ...selectedTask,
          status: newStatus,
        },
      };
    // ... other cases if needed
    default:
      return state;
  }
};

export default modalReducer;
