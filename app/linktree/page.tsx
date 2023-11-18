import { METADATA } from "@/common/constant/metadata";
import LinkTrComponents from "@/modules/linktree";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Linktree ${METADATA.exTitle}`,
  description: `Linktree ${METADATA.description}`,
};

export default function LinkTr() {
  return <LinkTrComponents />;
}
