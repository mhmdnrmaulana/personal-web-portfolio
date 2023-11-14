import TextScrollRight from "@/common/elements/TextRight";
import TextScrollLeft from "@/common/elements/TextScroll";
import Compo from "@/common/elements/compo";
import { socialLinks } from "@/common/service/maping";
import Link from "next/link";
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
              <AiFillControl size={40} />
            </div>
            <h1 className="font-semibold text-2xl">Let`s Connect</h1>
          </div>
          <p className="text-sm font-semibold mb-2">My Social Media</p>
        </TextScrollLeft>

        <TextScrollRight>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-5 lg:grid-cols-7">
            {socialLinks.map((item, index) => (
              <div className="flex flex-col items-center justify-center gap-4 group" key={index}>
                <h2 className="group-hover:opacity-100 opacity-0 transition-all duration-1000">{item.name}</h2>
                <Link href={item.href} target="_blank">
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
        </TextScrollRight>
      </Compo>
    </div>
  );
}
