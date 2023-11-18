import Container from "@/common/layouts/Container";
import Image from "next/image";
import React from "react";
import { SiNextdotjs } from "react-icons/si";

export default function Footer() {
  return (
    <Container>
      <div className="flex items-center md:justify-center gap-2">
        <div className="w-1/2 md:max-w-max text-end md:text-start">
          <h2 className="font-semibold font-mono">Powered by New Technologies</h2>
        </div>

        <div className="flex items-center gap-2 w-1/2 md:max-w-max">
          <div className="group relative flex items-center gap-2">
            <p className="hidden font-mono absolute -top-[140%] bg-slate-300 group-hover:flex p-1 rounded-md text-slate-950 font-semibold">NextJS</p>
            <SiNextdotjs size={30} />
          </div>

          <div className="group relative flex items-center gap-2">
            <p className="hidden font-mono absolute -left-[100%] -top-[140%] bg-slate-300 group-hover:flex p-1 rounded-md text-slate-950 font-semibold">TailwindCSS</p>
            <Image width={30} height={30} src={"/images/tailwind.png"} alt="Tailwind CSS" />
          </div>
        </div>
      </div>

      <div className="text-center mt-3 font-semibold text-sm">
        <p>Made by Muhammad Nur Maulana All Right Reserved</p>
      </div>
    </Container>
  );
}
