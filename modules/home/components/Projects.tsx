import Motion from "@/common/elements/Motion";
import TextScrollLeft from "@/common/elements/TextScroll";
import Compo from "@/common/elements/compo";
import { getData } from "@/common/service/getData";
import Link from "next/link";
import React from "react";
import { FaGrip } from "react-icons/fa6";
import { TbEye } from "react-icons/tb";

export default async function LatestProjects() {
  // const projects = await getData(`${process.env.DOMAIN}/api/latest`);

  return (
    <div>
      <Compo>
        <TextScrollLeft>
          <div className="w-full h-[1px] bg-black dark:bg-white mb-8" />
          <div className="flex items-center gap-3">
            <div>
              <FaGrip size={30} />
            </div>
            <h1 className="font-semibold text-2xl">Latest Projects</h1>
          </div>
        </TextScrollLeft>

        <div className="flex justify-center my-8">
          <Link href={"/projects"} aria-label="View All Projects" className="text-blue-600 dark:text-blue-300 flex gap-1 items-center hover:opacity-70 duration-100">
            View All Projects
            <TbEye className="h-full w-6 animate-pulse" />
          </Link>
        </div>
      </Compo>
    </div>
  );
}
