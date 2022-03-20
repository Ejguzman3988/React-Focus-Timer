import React, { useState } from "react";
import formatClock from "../../utils/formatClock";
import ButtonContainer from "../Button/ButtonContainer";
import Clock from "./Clock";

const ClockContainer = ({ time, setTime, label, buttons }) => {
  const [hours, minutes, seconds] = formatClock(time);
  const [blink, setBlink] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="focus__timer">
      <div className="focus__label">{label}:</div>
      <Clock hours={hours} minutes={minutes} seconds={seconds} blink={blink} />
      <ButtonContainer
        buttons={buttons}
        selected={selected}
        setSelected={setSelected}
        setTime={setTime}
        blink={blink}
        setBlink={setBlink}
      />
    </div>
  );
};

export default ClockContainer;
