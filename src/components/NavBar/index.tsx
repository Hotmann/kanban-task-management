import React from "react";
import { useDispatch } from "react-redux";
import { Board } from "../../redux/types";
import { selectBoard } from "../../redux/board/boardActions";
import data from "../../data/data.json";
import { ReactComponent as IconBoard } from "../../assets/icon-board.svg";

const NavBar = () => {
  const dispatch = useDispatch();

  const createNewBoard = () => {};

  const handleBoardClick = (board: Board) => {
    dispatch(selectBoard(board));
  };

  return (
    <div>
      <h2 className="text-medium-grey text-xs py-4 px-6 uppercase">
        All boards ({data.boards.length})
      </h2>
      <nav>
        <ul>
          {data.boards.map((board) => {
            return (
              <li
                className="flex items-center gap-4 w-11/12 rounded-r-full px-6 py-3 cursor-pointer text-medium-grey active:bg-main-purple hover:text-main-purple hover:bg-main-purple/10 active:text-white active:hover:bg-light-purple"
                key={board.id}
                onClick={() => handleBoardClick(board)}
              >
                <IconBoard />
                {board.name}
              </li>
            );
          })}
          <li
            className="flex items-center gap-4 w-11/12 rounded-r-full px-6 py-3 cursor-pointer font-bold fill-main-purple text-main-purple hover:bg-medium-grey/10"
            onClick={createNewBoard}
          >
            <IconBoard />
            <span>+ Add New Board</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
