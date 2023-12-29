import { Board } from "../types";
import { SELECT_BOARD, BoardActionTypes } from "./boardTypes";

export interface BoardState {
  selectedBoard: Board | null;
}

export const storedBoard = localStorage.getItem("Board");

const initialState: BoardState = {
  selectedBoard: storedBoard ? JSON.parse(storedBoard) : null,
};

const boardReducer = (
  state = initialState,
  action: BoardActionTypes
): BoardState => {
  switch (action.type) {
    case SELECT_BOARD:
      localStorage.setItem("Board", JSON.stringify(action.payload));

      return {
        ...state,
        selectedBoard: action.payload,
      };

    // ... other cases if needed
    default:
      return state;
  }
};

export default boardReducer;
