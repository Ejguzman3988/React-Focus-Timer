import React from "react";

const Button = ({ idx, icon, selected, handleSelect }) => {
  return (
    <span
      className={selected ? `button button__selected` : `button`}
      onClick={() => handleSelect(icon, idx)}
    >
      {icon}
    </span>
  );
};

export default Button;
