import React, { useState, createContext } from "react";

export const FocusContext = createContext();

export const FocusProvider = ({ children }) => {
  const [focus, setFocus] = useState(0);

  const FocusState = {
    focus,
    setFocus,
  };

  return (
    <FocusContext.Provider value={{ FocusState }}>
      {children}
    </FocusContext.Provider>
  );
};
