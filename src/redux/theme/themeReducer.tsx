import {
  INITIALIZE_THEME,
  TOGGLE_THEME,
  ThemeActionTypes,
  ThemeState,
} from "./themeTypes";

const updateLocalStorage = (darkMode: boolean) => {
  localStorage.setItem("darkMode", darkMode.toString());
  document.documentElement.classList.toggle("dark", darkMode);
};

const initialState: ThemeState = {
  darkMode: (() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    return (
      isDarkMode ||
      (!isDarkMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  })(),
};

const themeReducer = (state = initialState, action: ThemeActionTypes) => {
  switch (action.type) {
    case INITIALIZE_THEME:
      const initializedDarkMode = action.payload;
      updateLocalStorage(initializedDarkMode);
      return {
        ...state,
      };
    case TOGGLE_THEME:
      const newDarkMode = !state.darkMode;
      return {
        ...state,
        darkMode: newDarkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;
