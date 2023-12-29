import { Subtask, Task } from "../types";
import {
  SELECT_TASK,
  SelectTaskAction,
  UPDATE_SUBTASK,
  updateSubtaskAction,
  UPDATE_TASK_STATUS,
} from "./modalTypes";

export const selectTask = (task: Task | null): SelectTaskAction => ({
  type: SELECT_TASK,
  payload: task,
});

export const updateSubtask = (
  updatedSubtask: Subtask
): updateSubtaskAction => ({
  type: UPDATE_SUBTASK,
  payload: updatedSubtask,
});

export const updateTaskStatus = (newStatus: Task["status"]) => ({
  type: UPDATE_TASK_STATUS,
  payload: newStatus,
});
