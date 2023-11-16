import ContainerScroll from "@/common/elements/ContainerScroll";
import React from "react";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

export default function Education() {
  return (
    <ContainerScroll>
      <div>
        <div className="w-full h-[1px] bg-black dark:bg-white mb-8" />
        <div className="flex items-center gap-2 font-mono font-semibold mb-2">
          <AiOutlineDeploymentUnit size={30} className="text-blue-700" />

          <h1 className="text-2xl font-bold">Education</h1>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h2 className="font-semibold">University Indra Prasta PGRI</h2>
        <h2 className="font-semibold font-mono text-sm">Bachelor`s Degree - Informatics Engineering</h2>
        <h2 className="font-mono text-xs">September 2022 - Present</h2>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <h2 className="font-semibold">Expected year of Graduation</h2>
        <h2 className="font-mono text-xs">2026</h2>
      </div>
    </ContainerScroll>
  );
}
