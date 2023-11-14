import Motion from "@/common/elements/Motion";
import TextScrollLeft from "@/common/elements/TextScroll";
import Compo from "@/common/elements/compo";
import { getData } from "@/common/service/getData";
import React from "react";
import { BiLayer } from "react-icons/bi";

export default async function LatestProjects() {
  // const projects = await getData(`${process.env.DOMAIN}/api/latest`);

  return (
    <div>
      <Compo>
        <TextScrollLeft>
          <div className="w-full h-[1px] bg-black dark:bg-white mb-8" />
          <div className="flex items-center gap-3">
            <div>
              <BiLayer size={40} />
            </div>
            <h1 className="font-semibold text-2xl">Latest Projects</h1>
          </div>
        </TextScrollLeft>

        {/* <Motion projects={projects} /> */}
      </Compo>
    </div>
  );
}
