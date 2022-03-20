import React from "react";
import "./Clock.css";

const Clock = ({ hours, minutes, seconds, blink }) => {
  return (
    <>
      <span>{hours}</span>
      <span className={blink ? null : "clock__hide__colon"}>:</span>
      <span>{minutes}</span>
      <span className={blink ? null : "clock__hide__colon"}>:</span>
      <span>{seconds}</span>
    </>
  );
};

export default Clock;
