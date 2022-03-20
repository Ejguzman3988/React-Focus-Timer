import React, { useState } from "react";
import Button from "../Button/Button";

const ButtonContainer = ({
  buttons,
  selected,
  setSelected,
  setTime,
  setBlink,
  timerId,
  setTimerId,
  blinkId,
  setBlinkId,
  resetTime,
  myStorage,
}) => {
  const handleSelected = (icon, idx) => {
    icon === `🔁` || (idx !== undefined && setSelected(() => idx));
    switch (icon) {
      case `▶️`: {
        if (!timerId) {
          setTimerId(
            setInterval(() => {
              setTime((time) => time + 1);
            }, 1000)
          );
          setBlinkId(
            setInterval(() => {
              setBlink((blink) => !blink);
            }, 500)
          );
        }
        break;
      }
      case `⏸️`: {
        clearInterval(timerId);
        clearInterval(blinkId);
        setBlink(true);
        setTimerId(null);
        setBlinkId(null);
        break;
      }
      case `⏹️`: {
        clearInterval(timerId);
        clearInterval(blinkId);
        setTimerId(null);
        setBlinkId(null);
        resetTime();
        break;
      }
      case `🔁`: {
        myStorage.removeItem("focusHighScore");
        setTime(0);
        break;
      }
      default:
        return;
    }
  };

  return (
    <div className="focus__buttons">
      {buttons.map((btn, idx) => (
        <Button
          key={idx}
          idx={idx}
          icon={btn}
          selected={selected === idx ? true : false}
          handleSelected={handleSelected}
          myStorage={myStorage}
        />
      ))}
    </div>
  );
};

export default ButtonContainer;
