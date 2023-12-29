import React, { useState } from "react";
import { ReactComponent as Hide } from "../../assets/icon-hide-sidebar.svg";
import { ReactComponent as Show } from "../../assets/icon-show-sidebar.svg";
import NavBar from "../../components/NavBar";
import ThemeToggle from "../../components/UI/ThemeToggle";

interface SideBarProps {}

const SideBar = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  return (
    <>
      <aside
        className={`flex justify-between sm:flex-col fixed z-10 transition-transform bg-white dark:bg-dark-grey-2 border-r border-r-line-light dark:border-r-line-dark w-64 lg:w-[18.75rem] h-[calc(100%-6rem)] pb-8 font-bold ${
          isSidebarHidden ? "translate-x-[-100%]" : ""
        }`}
      >
        <NavBar />
        <div>
          <ThemeToggle />
          <button
            onClick={() => {
              setIsSidebarHidden(true);
            }}
            className="flex items-center gap-2 text-medium-grey mx-6 my-4 cursor-pointer hover:text-medium-grey/70"
          >
            <Hide />
            Hide Sidebar
          </button>
        </div>
      </aside>
      <button
        onClick={() => {
          setIsSidebarHidden(false);
        }}
        className="fixed bottom-8 left-0 rounded-r-full cursor-pointer p-4 pr-5 bg-main-purple hover:bg-light-purple transition-colors hidden sm:block"
      >
        <Show />
      </button>
    </>
  );
};

export default SideBar;
