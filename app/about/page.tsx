import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  description: `About ${METADATA.description}`,
};

export default function About() {
  return (
    <div>
      <h1>tes</h1>
    </div>
  );
}
