import { METADATA } from "@/common/constant/metadata";
import ProjectsComponent from "@/modules/project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function Projects() {
  return <ProjectsComponent />;
}
