import { socialMap } from "@/common/constant/social";
import TextScrollRight from "@/common/elements/TextRight";
import TextScrollLeft from "@/common/elements/TextScroll";
import Compo from "@/common/elements/compo";
import React from "react";
import { AiFillControl } from "react-icons/ai";

export default function Social() {
  return (
    <div>
      <Compo>
        <TextScrollLeft>
          <div className="w-full h-[1px] bg-black dark:bg-white mb-8" />
          <div className="flex items-center gap-3">
            <div>
              <AiFillControl size={30} />
            </div>
            <h1 className="font-semibold text-2xl">Let`s Connect</h1>
          </div>
          <p className="text-sm font-semibold mb-2">My Social Media</p>
        </TextScrollLeft>

        <TextScrollRight>
          <div className="grid grid-cols-4 lg:grid-cols-10 gap-2 py-12">
            {socialMap.map((item, index) => (
              <div className="flex flex-col items-center justify-center group relative gap-2" key={index}>
                <h2 className="opacity-0 group-hover:opacity-100 transition-all duration-1000">{item.name}</h2>
                <a href={item.href} target="_blank" aria-label={`${item.name}}`}>
                  <item.SvgIcon className={`w-6 h-6 ${item.class}`} />
                </a>
              </div>
            ))}
          </div>
        </TextScrollRight>
      </Compo>
    </div>
  );
}
