import React, { useState } from "react";
import Button from "../Button/Button";

const ButtonContainer = ({
  buttons,
  selected,
  setSelected,
  setTime,
  blink,
  setBlink,
}) => {
  const [timerId, setTimerId] = useState(null);
  const [blinkId, setBlinkId] = useState(null);
  const resetTime = () => {
    setTime(0);
    setBlink(true);
  };

  const handleSelected = (icon, idx) => {
    idx !== undefined && setSelected(() => idx);
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
        myStorage.removeItem("timerHighScore");
        setHighScore(0);
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
          idx={idx}
          icon={btn}
          selected={selected}
          handleSelected={handleSelected}
        />
      ))}
    </div>
  );
};

export default ButtonContainer;
