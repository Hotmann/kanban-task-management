import { RootState } from "../rootReducer";

export const selectTheme = (state: RootState) => state.theme;
export const selectDarkMode = (state: RootState) => state.theme.darkMode;
