import React from "react";
import formatClock from "../../utils/formatClock";

const ClockContainer = ({ time, setTime, label }) => {
  const [hours, minutes, seconds] = formatClock(time);

  return (
    <div className="focus__timer">
      <div className="focus__label">{label}:</div>
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      <div>
        {/* Button Component */}
        <button className="focus__button">+</button>
      </div>
    </div>
  );
};

export default ClockContainer;
