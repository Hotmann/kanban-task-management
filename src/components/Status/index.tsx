import React, { useState } from "react";
import { ReactComponent as DropdownIcon } from "../../assets/icon-chevron-up.svg";
import { useSelector } from "react-redux";
import { selectSelectedBoard } from "../../redux/board/boardSelectors";
// import { ReactComponent as Chevdown } from "../../assets/icon-chevron-down.svg";

interface StatusProps {
  currentStatus: string;
  onUpdateStatus: (newStatus: string) => void;
}

const Status: React.FC<StatusProps> = ({ currentStatus, onUpdateStatus }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const selectedBoard = useSelector(selectSelectedBoard);
  const statusOptions = selectedBoard?.columns.map((column) => column.name);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const newStatus = e.target.value;
    onUpdateStatus(newStatus);
    setShowDropdown(false);
  };

  return (
    <>
      <div className="text-sm text-black dark:text-white font-bold rounded  relative w-full flex items-center border border-medium-grey border-opacity-25 cursor-pointer hover:border-main-purple focus:border-main-purple">
        <select
          className="block w-full bg-white dark:bg-dark-grey-2 px-4 py-3 cursor-pointer outline-none appearance-none"
          onClick={() => setShowDropdown((prev) => !prev)}
          onChange={handleStatusChange}
          value={currentStatus}
        >
          {statusOptions?.map((option) => (
            <option
              className=" text-medium-grey font-bold hover:text-black dark:hover:text-white"
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
        <div className={`${showDropdown ? "" : "rotate-180"} absolute right-2`}>
          <DropdownIcon />
        </div>
      </div>
    </>
  );
};

export default Status;
