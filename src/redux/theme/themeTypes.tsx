export const TOGGLE_THEME = "TOGGLE_THEME";
export const INITIALIZE_THEME = "INITIALIZE_THEME";

export interface ThemeState {
  darkMode: boolean;
}

export interface InitializeThemeAction {
  type: typeof INITIALIZE_THEME;
  payload: boolean;
}

export interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

export type ThemeActionTypes = InitializeThemeAction | ToggleThemeAction;
