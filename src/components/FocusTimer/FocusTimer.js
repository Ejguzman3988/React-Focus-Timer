import React, { useState } from "react";
import ClockContainer from "../Clock/ClockContainer";
import "./FocusTimer.css";

export const FocusTimer = () => {
  const [focus, setFocus] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div className="focus__container">
      <ClockContainer label={"Focus"} time={focus} setTime={setFocus} />
      <div className="focus__theme">
        {/* Dropdown Component */}
        <div className="focus__label">Theme: </div>
        <select className="focus__dropdown">
          <option className="focus__option">something</option>
        </select>
      </div>
      <ClockContainer label={"High Score"} time={score} setTime={setScore} />
    </div>
  );
};
