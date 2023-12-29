import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../../redux/theme/themeActions";
import { selectDarkMode } from "../../../redux/theme/themeSelectors";
import { ReactComponent as Dark } from "../../../assets/icon-dark-theme.svg";
import { ReactComponent as Light } from "../../../assets/icon-light-theme.svg";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => {
    // Dispatch the action to initialize the theme
    dispatch({ type: "INITIALIZE_THEME", payload: darkMode });
  }, [dispatch, darkMode]);
  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="rounded-md bg-light-grey flex items-center justify-center gap-6 p-4 py-3 dark:bg-dark-grey w-10/12 mx-auto">
      <Light />
      <label className="bg-main-purple hover:bg-light-purple cursor-pointer min-w-[40px] min-h-[22px] p-1 rounded-xl relative">
        <div className="rounded-full h-[14px] w-[14px] bg-white transition-all duration-300 absolute dark:translate-x-[18px]"></div>
        <input
          className="w-10/12 mx-auto cursor-pointer absolute hidden"
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
      </label>
      <Dark />
    </div>
  );
};

export default ThemeToggle;
