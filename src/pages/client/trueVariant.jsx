import React, { useState } from "react";
import "./client.css";
import { data } from "../../constants";
import VariantBox from "./variant-box";
import { useDispatch, useSelector } from "react-redux";
import { postUsername } from "../../slice/quest.slice";

const TrueVariants = () => {
  const { username, answers } = useSelector((state) => state.quest);

  return (
    <div className="client-side">
      <form className="test-wrapper">
        <div className="test-title"></div>
        <div className="user-info info-content">
          <h4>Iltimos ozingiz haqingizda malumot bering</h4>
          <label htmlFor="username">Ism, Familiyangizni kiriting</label>
          <input
            type="text"
            className="info-input"
            disabled={true}
            value={username}
            required
            id="username"
            placeholder="Javob"
          />
        </div>
        <div className="test-box">
          {data.map((item, idx) => (
            <div className="info-content">
              <div className="question">
                <p>
                  <b>
                    {idx + 1}.{item.questTitle}
                  </b>
                </p>
              </div>
              <div className="variants">
                {item.variants.map((variant, idx) => (
                  <div className="variant">
                    {variant.isTrue == true ? (
                      <div className="true-circule"></div>
                    ) : (
                      answers[idx].isTrue == false && (
                        <div className="false-circule"></div>
                      )
                    )}
                    <label>{variant.label}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary mt-2" disabled>
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default TrueVariants;
