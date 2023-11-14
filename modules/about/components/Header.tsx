import TextScrollRight from "@/common/elements/TextRight";
import TextScrollLeft from "@/common/elements/TextScroll";
import Compo from "@/common/elements/compo";
import React from "react";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

export default function AboutHeader() {
  return (
    <Compo>
      <TextScrollLeft>
        <div className="flex items-center gap-2 font-mono font-semibold mb-2">
          <div className="text-blue-700">
            <AiOutlineDeploymentUnit size={40} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">About Me</h1>
            <p className="text-sm font-semibold mb-2">A short story of me</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black dark:bg-white mb-8" />
      </TextScrollLeft>

      <TextScrollRight>
        <div className="flex flex-col gap-3 mb-8">
          <h1 className="text-sm">
            Hi I`m Muhammad Nur Maulana, a seasoned I focusses frontend developer with a deep passion for creating elegant and efficient solution through code. With a strong foundation in JAVA, Javascript, Typescript, along with a
            comprehensive understanding of various frontend libraries and frameworks. I have been navigating the ever-evolving landscape of web development with enthusiasm and dedication. Currently, reside in Jakarta, Jakarta{" "}
            <span className="font-semibolg text-xs font-semibold">ID</span>
          </h1>
          <h1 className="text-sm">I am currently active as a third semester student at Indra Prasta PGRI University and taking Bachelor`s Degree majoring in Informatics Engineering in 2022 and expected to graduate in 2026. </h1>
          <h1 className="text-sm">
            I specializing in React and Next JS framework, along with Firebas and PostgreSQL. My primary focus is on delivering high-performance websites that are interactive and responsive. With my experience in web application
            development, I strive to provide users with an optimal experience through attractive designs and exceptional functionality. I enjoy exploring new technologies and continuously learning the best practices to enhance website
            performance and responsiveness.
          </h1>
        </div>
      </TextScrollRight>

      <TextScrollLeft>
        <div className="w-full h-[1px] bg-black dark:bg-white mb-8" />
        <div className="flex items-center gap-2 font-mono font-semibold mb-2">
          <AiOutlineDeploymentUnit size={30} className="text-blue-700" />

          <h1 className="text-2xl font-bold">Education</h1>
        </div>
      </TextScrollLeft>

      <div className="mt-8 flex flex-col gap-3">
        <h2 className="font-semibold">University Indra Prasta PGRI</h2>
        <h2 className="font-semibold font-mono text-sm">Bachelor`s Degree - Informatics Engineering</h2>
        <h2 className="font-mono text-xs">September 2022 - Present</h2>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <h2 className="font-semibold">Expected year of Graduation</h2>
        <h2 className="font-mono text-xs">2026</h2>
      </div>
    </Compo>
  );
}
