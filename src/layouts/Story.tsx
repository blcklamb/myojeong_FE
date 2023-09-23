import Intro from "components/story/Intro";
import NameFrom from "components/story/NameFrom";
import NameTo from "components/story/NameTo";
import Turn from "components/story/Turn";
import TypeTo from "components/story/TypeTo";
import React from "react";

const Story = () => {
  return (
    <div>
      <Intro />
      <Turn />
      <NameFrom />
      <TypeTo />
      <NameTo />
    </div>
  );
};

export default Story;
