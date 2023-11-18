import Container from "@/common/layouts/Container";
import React from "react";
import HomeHeader from "./components/Header";
import Social from "./components/Social";
import Skills from "./components/Skills";
import LatestProjects from "./components/Projects";

export default function HomeComponents() {
  return (
    <main>
      <Container>
        <HomeHeader />
        <Social />
        <Skills />
        {/* <LatestProjects /> */}
      </Container>
    </main>
  );
}
