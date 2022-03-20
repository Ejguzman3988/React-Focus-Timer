import React, { useState, useEffect, useRef } from "react";
import formatClock from "../../utils/formatClock";
import ButtonContainer from "../Button/ButtonContainer";
import Clock from "./Clock";

const ClockContainer = ({ time, setTime, label, buttons, myStorage }) => {
  const [hours, minutes, seconds] = formatClock(time);
  const [blink, setBlink] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [timerId, setTimerId] = useState(null);
  const [blinkId, setBlinkId] = useState(null);
  const timeRef = useRef();
  timeRef.current = time;

  const resetTime = () => {
    setTime(0);
    setBlink(true);
  };

  useEffect(() => {
    const localFocusTime = parseInt(myStorage.getItem("focus"));
    localFocusTime ? setTime(localFocusTime) : setTime(0);
    window.addEventListener("beforeunload", (e) => {
      clearInterval(timerId);
      clearInterval(blinkId);
      myStorage.setItem("focus", timeRef.current);
    });

    return () => {
      clearInterval(timerId);
      clearInterval(blinkId);
      myStorage.setItem("timer", time);
    };
  }, [label === "Focus"]);

  const buttonProps = {
    buttons,
    selected,
    setSelected,
    setTime,
    timerId,
    setTimerId,
    blink,
    setBlink,
    blinkId,
    setBlinkId,
    resetTime,
    myStorage,
  };

  return (
    <div className="focus__timer">
      <div className="focus__label">{label}:</div>
      <Clock hours={hours} minutes={minutes} seconds={seconds} blink={blink} />
      <ButtonContainer {...buttonProps} />
    </div>
  );
};

export default ClockContainer;
