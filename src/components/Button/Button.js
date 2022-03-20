import React from "react";
import "./Button.css";

const Button = ({ idx, icon, selected, handleSelected }) => {
  return (
    <span
      className={selected ? `button button__selected` : `button`}
      onClick={() => handleSelected(icon, idx)}
    >
      {icon}
    </span>
  );
};

export default Button;
