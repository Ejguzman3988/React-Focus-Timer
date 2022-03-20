import React, { useState } from "react";

const ThemeOption = ({ themeOption, toggle, setToggle, setTheme }) => {
  const handleSelect = (e) => {
    if (!toggle) {
      console.log("newSet");
      setTheme(themeOption);
    }
    setToggle((toggle) => !toggle);
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
