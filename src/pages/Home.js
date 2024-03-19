import React from "react";
import { Programs,  Hero, Event, ProgramsCards } from "components/home";
import { Wrapper } from "components/navigation";

const Home = () => {
  return (
    <Wrapper showTopNav={false}>
      <Hero />
      <Programs/>
      <ProgramsCards/>
      <Event/>
    </Wrapper>
  );
};

export default Home;
