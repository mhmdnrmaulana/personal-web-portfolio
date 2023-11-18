export const metadata: Metadata = {
  title: `Personal Website ${METADATA.exTitle}`,
  description: `Home ${METADATA.description}`,
};

import { METADATA } from "@/common/constant/metadata";
import HomeComponents from "@/modules/home";
import { Metadata } from "next";

export default function Home() {
  return <HomeComponents />;
}
