import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeReducer";
import boardReducer from "./board/boardReducer";
import modalReducer from "./modal/modalReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  board: boardReducer,
  modal: modalReducer,
  // Add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
