import React from "react";

const Clock = ({ hours, minutes, seconds }) => {
  return (
    <>
      <span>{hours}</span>
      <span className={blink ? null : styles.noColon}>:</span>
      <span>{minutes}</span>
      <span className={blink ? null : styles.noColon}>:</span>
      <span>{seconds}</span>
    </>
  );
};

export default Clock;
