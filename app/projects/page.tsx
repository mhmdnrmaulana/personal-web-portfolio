import { METADATA } from "@/common/constant/metadata";
import ProjectsComponent from "@/modules/project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  description: `Projects ${METADATA.description}`,
};

export default function Projects() {
  return (
    <div>
      <ProjectsComponent />
    </div>
  );
}
