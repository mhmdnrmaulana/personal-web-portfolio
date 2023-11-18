import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Personal Website ${METADATA.exTitle}`,
  description: `Home ${METADATA.description}`,
};

export default function Home() {
  return (
    <div>
      <h1>tes</h1>
    </div>
  );
}
