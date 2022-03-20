import React from "react";
import { storiesOf } from "@storybook/react";
import { FocusTimer } from "../components/FocusTimer/FocusTimer";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <FocusTimer />;
});
