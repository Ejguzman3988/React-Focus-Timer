import React, { useState, useEffect } from "react";
import ClockContainer from "../Clock/ClockContainer";
import Dropdown from "../Dropdown/Dropdown";
import "./FocusTimer.css";

export const FocusTimer = () => {
  const [focus, setFocus] = useState(0);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState(null);
  const [themes, setThemes] = useState(null);
  const myStorage = window.localStorage;

  useEffect(() => {
    const getTheme = myStorage.getItem("focusTheme");
    const getAllThemes = myStorage.getItem("focusAllThemes");

    getTheme
      ? setTheme(getTheme.split(","))
      : setTheme({ theme: "elegant", buttonDeg: "180deg" });
    getAllThemes
      ? setThemes(getAllThemes)
      : setThemes([
          { theme: "elegant", buttonDeg: "180deg" },
          { theme: "dependable", buttonDeg: "222deg" },
          { theme: "friendly", buttonDeg: "45deg" },
          { theme: "laid-back", buttonDeg: "250deg" },
        ]);
  }, []);

  useEffect(() => {
    setScore(() => {
      myStorage.setItem("focusHighScore", focus);
      return focus;
    });
  }, [focus > score]);

  useEffect(() => {
    const getTheme = myStorage.getItem("focusTheme");
    if (getTheme && getTheme !== theme) {
      myStorage.setItem("focusTheme", theme);
    }
  }, [theme]);

  useEffect(() => {
    const getAllThemes = JSON.parse(myStorage.getItem("focusAllThemes"));
    if (getAllThemes && getAllThemes !== themes) {
      myStorage.setItem("focusAllThemes", JSON.stringify(getAllThemes));
    }
  }, [themes]);

  return (
    <div className="focus__container">
      <ClockContainer
        label={"Focus"}
        time={focus}
        setTime={setFocus}
        buttons={[`▶️`, `⏸️`, `⏹️`]}
        myStorage={myStorage}
      />
      <Dropdown
        buttons={[`▶️`, `⏸️`, `⏹️`]}
        theme={theme}
        setTheme={setTheme}
        themes={themes}
      />
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
