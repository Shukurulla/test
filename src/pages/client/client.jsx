import React, { useState } from "react";
import "./client.css";
import { data } from "../../constants";
import VariantBox from "./variant-box";
import { useDispatch } from "react-redux";
import { postUsername } from "../../slice/quest.slice";
import Modal from "./modal";

const Client = () => {
  const dispatch = useDispatch();
  const [isShoModal, setIsShowModal] = useState(false);
  const usernameHandler = (name) => {
    dispatch(postUsername(name));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsShowModal(true);
  };

  return isShoModal ? (
    <Modal />
  ) : (
    <div className="client-side">
      <form className="test-wrapper" onSubmit={(e) => submitHandler(e)}>
        <div className="test-title"></div>
        <div className="user-info info-content">
          <h4>Iltimos ozingiz haqingizda malumot bering</h4>
          <label htmlFor="username">Ism, Familiyangizni kiriting</label>
          <input
            type="text"
            className="info-input"
            onChange={(e) => usernameHandler(e.target.value)}
            required
            id="username"
            placeholder="Javob"
          />
        </div>
        <div className="test-box">
          {data.map((item, idx) => (
            <VariantBox item={item} idx={idx} />
          ))}
        </div>
        <button className="btn btn-primary mt-2">Yuborish</button>
      </form>
    </div>
  );
};

export default Client;
