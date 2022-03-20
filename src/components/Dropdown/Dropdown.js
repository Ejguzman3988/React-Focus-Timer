import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="focus__theme">
      <div className="focus__label">Theme: </div>
      <select className="focus__dropdown">
        <option className="focus__option">something</option>
      </select>
    </div>
  );
};

export default Dropdown;
