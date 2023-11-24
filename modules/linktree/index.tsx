"use client";
import { linktree } from "@/common/constant/linktree";
import Compo from "@/common/elements/compo";
import Container from "@/common/layouts/Container";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function LinkTrComponents() {
  return (
    <Container>
      <Compo>
        <motion.div
          initial={{ opacity: 0, filter: "blur(15px)", y: 100 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ delay: 0.25 }}
          className="w-full text-sm md:w-1/2 mx-auto border-2 border-neutral-500 rounded-md relative overflow-hidden"
        >
          <div className="w-full h-[10vh] md:h-[20vh] bg-[url('/images/project1.webp')] blur-[3px] bg-cover bg-top relative -z-20" />
          <div className="w-24 h-24 rounded-full mx-auto bg-[url('/images/my.webp')] border-2 border-white -mt-12 bg-cover bg-center" />
          <div className="p-8 flex flex-col gap-1 items-center">
            <h1>Muhammad Nur Maulana</h1>
            <p>Indonesia, Jakarta - He</p>
            <p className="text-center">Hello there, I`m currently focussing on Frontend Web Development</p>
          </div>

          <div className="px-8 pb-8 flex flex-col gap-4">
            {linktree.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                target="_blank"
                aria-label={item.name}
                className={`w-full flex justify-center items-center gap-3 border border-neutral-800 py-3 rounded-md transition-all duration-300
                ${item.classBg} hover:border-b-[5px]`}
              >
                <item.SvgIcon className={`w-6 h-6 ${item.class}`} />
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </Compo>
    </Container>
  );
}
