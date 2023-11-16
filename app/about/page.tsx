import { METADATA } from "@/common/constant/metadata";
import AboutComponents from "@/modules/about";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  description: `About ${METADATA.description}`,
};

export default function About() {
  return <AboutComponents />;
}
