import { METADATA } from "@/common/constant/metadata";
import AboutComponents from "@/modules/about";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function About() {
  return <AboutComponents />;
}
