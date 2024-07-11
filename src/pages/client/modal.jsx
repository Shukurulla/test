import React from "react";
import { useSelector } from "react-redux";

const Modal = () => {
  const { username, answers } = useSelector((state) => state.quest);
  const count = answers.length;
  const trueCount = answers.filter((c) => c.variant.isTrue == true);

  return (
    <div className="modal-wrapper">
      <div className="modal-bg"></div>
      <div className="modal-box">
        <h3>Username: {username}</h3>
        <h5>Umumiy test: {count}</h5>
        <h5>Togri variantlar: {trueCount}</h5>
        <h5>Umumiy ball: {trueCount}ball</h5>
        <button className="btn btn-primary">Javoblarni korish</button>
      </div>
    </div>
  );
};

export default Modal;
