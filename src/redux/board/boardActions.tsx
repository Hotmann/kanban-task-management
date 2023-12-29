import { Board } from "../types";
import { SELECT_BOARD, SelectBoardAction } from "./boardTypes";

export const selectBoard = (board: Board): SelectBoardAction => ({
  type: SELECT_BOARD,
  payload: board,
});
