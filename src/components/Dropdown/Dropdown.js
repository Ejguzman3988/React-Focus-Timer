import React, { useState } from "react";
import "./Dropdown.css";
import ThemeOption from "./ThemeOption";

const Dropdown = ({ theme, setTheme, themes }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="focus__theme">
      <div className="focus__label">Theme: </div>
      <ul className="focus__dropdown">
        {toggle
          ? themes?.map((theme, idx) => (
              <ThemeOption
                key={idx}
                themeOption={theme}
                setTheme={setTheme}
                setToggle={setToggle}
              />
            ))
          : theme && (
              <ThemeOption
                key={"default"}
                themeOption={theme}
                setTheme={setTheme}
                toggle={toggle}
                setToggle={setToggle}
              />
            )}
      </ul>
    </div>
  );
};

export default Dropdown;
