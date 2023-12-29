import { Board, Task } from "../types";

export const SELECT_BOARD = "SELECT_BOARD";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SELECT_TASK = "SELECT_TASK";
export const UPDATE_SUBTASK = "UPDATE_SUBTASK";

export interface SelectBoardAction {
  type: typeof SELECT_BOARD;
  payload: Board;
}

export interface SelectTaskAction {
  type: typeof SELECT_TASK;
  payload: Task | null;
}

export type BoardActionTypes = SelectBoardAction | SelectTaskAction;
