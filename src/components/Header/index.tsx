import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSelectedBoard } from "../../redux/board/boardSelectors";
import Logo from "../UI/Logo";
import { ReactComponent as AddIcon } from "../../assets/icon-plus.svg";
import { ReactComponent as Bar } from "../../assets/icon-vertical-ellipsis.svg";
import DropDown from "../DropDown";

const Header = () => {
  const [show, setShow] = useState(false);
  const selectedBoard = useSelector(selectSelectedBoard);
  return (
    <div className="bg-white dark:bg-dark-grey-2 flex items-center w-full">
      <Logo />
      <div className="flex items-center justify-between px-8 border-r border-r-line-light dark:border-r-line-dark w-[calc(100%-16rem)] lg:w-[calc(100%-18.75rem)]">
        <h1 className="text-black dark:text-white hidden sm:block font-bold text-2xl">
          {selectedBoard?.name}
        </h1>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-white text-sm font-bold py-3 px-4 rounded-3xl bg-main-purple hover:bg-light-purple"
          >
            <AddIcon className="block sm:hidden" />
            <span className="hidden sm:block">+ Add New Task</span>
          </button>
          <div className="cursor-pointer relative">
            <Bar onClick={() => setShow((prev) => !prev)} />
            <DropDown show={show} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
