import React from "react";
import style from "./ButtonContainer.module.css";
const ButtonContainer = ({ numbers, handlerOnClick }) => {
  return (
    <div className={style.ButtonContainer}>
      {numbers.map((num) => (
        <button className={style.button} onClick={()=>handlerOnClick(num)} key={num}>
          {num}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
