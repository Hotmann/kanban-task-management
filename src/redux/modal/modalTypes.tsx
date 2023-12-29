import { Subtask, Task } from "../types";

export const SELECT_TASK = "SELECT_TASK";
export const UPDATE_SUBTASK = "UPDATE_SUBTASK";
export const UPDATE_TASK_STATUS = "UPDATE_TASK_STATUS";
// export const TOGGLE_MODAL = "TOGGLE_MODAL";

export interface SelectTaskAction {
  type: typeof SELECT_TASK;
  payload: Task | null;
}

export interface updateSubtaskAction {
  type: typeof UPDATE_SUBTASK;
  payload: Subtask | null;
}

export interface updateStatusAction {
  type: typeof UPDATE_TASK_STATUS;
  payload: Task["status"];
}
export type ModalActionTypes =
  | SelectTaskAction
  | updateSubtaskAction
  | updateStatusAction;
