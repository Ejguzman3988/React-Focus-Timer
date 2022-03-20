import React, { useState } from "react";
import Button from "../Button/Button";

const ThemeOption = ({ themeOption, toggle, setToggle, setTheme, buttons }) => {
  const [btn, setBtn] = useState(
    buttons[Math.floor(Math.random() * buttons.length)]
  );

  const handleSelect = (e) => {
    if (!toggle) {
      console.log("newSet");
      setTheme(themeOption);
    }
    setToggle((toggle) => !toggle);
  };

  const handleBtn = (icon, idx) => {
    setBtn(buttons[Math.floor(Math.random() * buttons.length)]);
  };
  return (
    <div
      className="focus__option"
      style={{
        border: `5px var(--${themeOption.theme}-backgroundColor) double`,
        background: `var(--${themeOption.theme}-clockColor)`,
        color: `var(--${themeOption.theme}-backgroundColor)`,
      }}
      onClick={handleSelect}
    >
      {themeOption.theme}
    </div>
  );
};

export default ThemeOption;
