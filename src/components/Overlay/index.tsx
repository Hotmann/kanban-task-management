import React from "react";
import { useDispatch } from "react-redux";
// import { closeModal } from "../../redux/board/boardActions";

const Overlay = () => {
  const dispatch = useDispatch();

  const handleOverlayClick = () => {
    // dispatch(closeModal());
  };

  return <div className="overlay" onClick={handleOverlayClick}></div>;
};

export default Overlay;
