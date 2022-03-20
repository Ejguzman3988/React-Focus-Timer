import React from "react";
import "./FocusTimer.css";

export const FocusTimer = () => {
  return (
    <div className="focus__container">
      {/* Clock Component */}
      <div className="focus__timer">
        <div className="focus__label">Focus:</div>
        <div>0:0:0</div>
        <div>
          {/* Button Component */}
          <button className="focus__button">+</button>
        </div>
      </div>
      <div className="focus__theme">
        {/* Dropdown Component */}
        <div className="focus__label">Theme: </div>
        <select className="focus__dropdown">
          <option className="focus__option">something</option>
        </select>
      </div>
      <div className="focus__score">
        <div className="focus__label">High Score: </div>
        {/* Clock Component */}
        <div className="focus__score__timer">0:0:0</div>
        {/* Button Component */}
        <button className="focus__button">O</button>
      </div>
    </div>
  );
};
