import React from "react";
import "./Clock.css";

const Clock = ({ hours, minutes, seconds, blink }) => {
  return (
    <div className="clock">
      <span>{hours}</span>
      <span className={blink ? null : "clock__hide__colon"}>:</span>
      <span>{minutes}</span>
      <span className={blink ? null : "clock__hide__colon"}>:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default Clock;
