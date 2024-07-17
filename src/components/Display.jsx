import React from "react";
import dis from "./Display.module.css";
const Display = ({ currentDisplay }) => {
  return (
    <>
      <input
        className={dis.Display}
        type="text"
        value={currentDisplay}
        readOnly
      />
    </>
  );
};

export default Display;
