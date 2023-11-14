import Compo from "@/common/elements/compo";
import React, { Suspense } from "react";
import { TbBrandVscode } from "react-icons/tb";
import Framer from "./Framer";
import TextScrollLeft from "@/common/elements/TextScroll";
import { Contributions } from "@/common/github/GithubContributions";
import Loading from "@/common/github/Loading";

export default function Skills() {
  return (
    <div>
      <Compo>
        <TextScrollLeft>
          <div className="w-full h-[1px] bg-black dark:bg-white mb-8" />
          <div className="flex items-center gap-3">
            <div>
              <TbBrandVscode size={40} />
            </div>
            <h1 className="font-semibold text-2xl">Skills Tech</h1>
          </div>
          <p className="mb-8">My List of Tech Skills</p>
        </TextScrollLeft>

        <Framer />

        <div className="w-full h-[1px] bg-black dark:bg-white my-8" />
        <Suspense fallback={Loading()}>
          <Contributions />
        </Suspense>
      </Compo>
    </div>
  );
}
