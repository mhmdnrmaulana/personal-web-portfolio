import Container from "@/common/layouts/Container";
import React from "react";
import AboutHeader from "./components/Header";
import Education from "./components/Education";

export default function AboutComponents() {
  return (
    <Container>
      <AboutHeader />
      <Education />
    </Container>
  );
}
