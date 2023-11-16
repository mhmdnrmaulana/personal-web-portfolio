import TextScrollRight from "@/common/elements/TextRight";
import TextScrollLeft from "@/common/elements/TextScroll";
import Compo from "@/common/elements/compo";
import { socialLinks } from "@/common/service/maping";
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
          <div className="flex items-center flex-wrap gap-8">
            {socialLinks.map((item, index) => (
              <div className="flex flex-col items-center justify-center gap-4 group" key={index}>
                <h2 className="group-hover:opacity-100 opacity-0 transition-all duration-1000">{item.name}</h2>
                <a aria-labelledby={item.name} href={item.href} target="_blank" aria-label={`Link To ${item.name}}`}>
                  {item.icon}
                </a>
              </div>
            ))}
          </div>
        </TextScrollRight>
      </Compo>
    </div>
  );
}
