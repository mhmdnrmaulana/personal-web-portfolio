"use client";
import React from "react";
import ContainerScroll from "@/common/elements/ContainerScroll";

export default function HomeHeader() {
  return (
    <ContainerScroll>
      <div className="py-8 bg-[url('/images/buble.png')] bg-cover bg-center">
        <h2 className="font-mono font-semibold text-xl">Hi, I`m</h2>
        <div className="flex flex-col items-center gap-2 mt-8 relative">
          <h1 className="text-2xl md:text-4xl font-semibold dark:text-shadow-sm dark:shadow-black">
            Muhammad Nur Maulana
          </h1>
          <p className="text-lg animate-pulse dark:text-shadow-sm dark:shadow-black">
            Frontend Web Developer
          </p>
          <ul className="flex items-center gap-10 list-disc">
            <li className=" dark:text-shadow-sm dark:shadow-black">
              Based On Jakarta
            </li>
            <li className=" dark:text-shadow-sm dark:shadow-black">
              Based On Jakarta
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-justify">
        <p>
          I`m currently focussing on Frontend Web Development. Proficient in
          TypeScript and well-versed in all aspects of web technologies.
          Collaborative team player dedicated to delivering efficient, scalable,
          and visually appealing web applications.
        </p>
      </div>
    </ContainerScroll>
  );
}
