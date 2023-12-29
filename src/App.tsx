import { ReactComponent as Img3 } from "./assets/icon-check.svg";
import { ReactComponent as Img8 } from "./assets/icon-cross.svg";

import "./App.css";
import SideBar from "./container/Sidebar";
import Header from "./components/Header";
import Board from "./container/Board";
import TaskModal from "./container/TaskModal";

import { useDispatch, useSelector } from "react-redux";
import { selectTask } from "./redux/modal/modalActions";
import { showModal } from "./redux/modal/modalSelectors";

function App() {
  const dispatch = useDispatch();
  const show = useSelector(showModal);

  const closeModal = () => {
    dispatch(selectTask(null));
  };

  return (
    <div className="bg-light-grey w-screen h-screen text-white dark:bg-black">
      <Header />
      <div className="flex w-full h-full overflow-auto relative">
        <SideBar />
        <div className="fixed top-32 h-80 bg-red-light">
          <Img3 />
          <Img8 />
        </div>
        <Board />
      </div>

      {show && (
        <>
          <div
            className="fixed min-h-screen w-screen min-w-max bg-black bg-opacity-50 top-0 left-0 z-30"
            onClick={closeModal}
          ></div>
          <TaskModal />
        </>
      )}
    </div>
  );
}

export default App;
