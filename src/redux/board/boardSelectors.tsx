import { RootState } from "../../redux/rootReducer";

export const selectSelectedBoard = (state: RootState) =>
  state.board.selectedBoard;
