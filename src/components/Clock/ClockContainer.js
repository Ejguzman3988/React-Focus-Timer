import React, { useState } from "react";
import formatClock from "../../utils/formatClock";
import Clock from "./Clock";

const ClockContainer = ({ time, setTime, label }) => {
  const [hours, minutes, seconds] = formatClock(time);
  const [blink, setBlink] = useState(false);

  return (
    <div className="focus__timer">
      <div className="focus__label">{label}:</div>
      <Clock hours={hours} minutes={minutes} seconds={seconds} blink={blink} />
      <div>
        {/* Button Component */}
        <button className="focus__button">+</button>
      </div>
    </div>
  );
};

export default ClockContainer;
