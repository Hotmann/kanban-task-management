import { TOGGLE_THEME, ToggleThemeAction } from "./themeTypes";

export const toggleTheme = (): ToggleThemeAction => ({
  type: TOGGLE_THEME,
});
