import React, { useState, useEffect } from "react";
import ClockContainer from "../Clock/ClockContainer";
import Dropdown from "../Dropdown/Dropdown";
import "./FocusTimer.css";

export const FocusTimer = () => {
  const [focus, setFocus] = useState(0);
  const [score, setScore] = useState(0);
  const myStorage = window.localStorage;

  useEffect(() => {
    setScore(() => {
      myStorage.setItem("focusHighScore", focus);
      return focus;
    });
  }, [focus > score]);

  return (
    <div className="focus__container">
      <ClockContainer
        label={"Focus"}
        time={focus}
        setTime={setFocus}
        buttons={[`▶️`, `⏸️`, `⏹️`]}
        myStorage={myStorage}
      />
      <Dropdown />
      <ClockContainer
        label={"High Score"}
        time={score}
        setTime={setScore}
        buttons={[`🔁`]}
        myStorage={myStorage}
      />
    </div>
  );
};
