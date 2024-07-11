import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAnswer } from "../../slice/quest.slice";

const VariantBox = ({ item, idx }) => {
  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.quest);
  const selectVariantHandler = (variant, testId) => {
    const filter = answers.filter((c) => c.testId !== testId);

    dispatch(postAnswer([...filter, { variant, testId }]));
  };
  return (
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
          <div className="variant d-flex align-items-center gap-2">
            <input
              type="radio"
              id={variant.id}
              required
              onChange={() => selectVariantHandler(variant, item.id)}
              name={item.questTitle}
            />
            <label htmlFor={variant.id}>{variant.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariantBox;
