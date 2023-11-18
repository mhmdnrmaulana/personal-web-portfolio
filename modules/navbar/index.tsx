"use client";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React from "react";
import { usePathname } from "next/navigation";
import { METADATA } from "@/common/constant/metadata";
import { Menu } from "@/common/constant/menu";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Navbar() {
  const [navOpen, setNavOpen] = React.useState<boolean>(false);

  const path = usePathname();

  const handleMobileNav = (value: boolean) => {
    setNavOpen(value);
  };

  return (
    <nav className="fixed w-screen h-0 z-50 dark:text-neutral-300">
      <button
        onClick={() => handleMobileNav(!navOpen)}
        className={`absolute z-10 top-5 cursor-pointer transition-all duration-700
        ${navOpen ? "left-64 md:left-[350px] rotate-180" : "left-3"}`}
      >
        <MdKeyboardDoubleArrowRight className="w-6 h-6" />
      </button>

      <motion.ul variants={container} initial="hidden" animate="visible" className={`${navOpen ? "hidden" : "flex flex-col md:flex-row py-16 pl-3 gap-4 max-w-max"}`}>
        {Menu.map((item, index) => (
          <motion.li key={index} className="group" variants={items}>
            <p className="font-mono hidden group-hover:flex absolute top-1 bg-neutral-300 text-neutral-800 p-1 rounded">{item.label}</p>
            <Link href={item.pathName}>
              <item.Svg className="w-6 h-6" />
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {navOpen ? <div onClick={() => handleMobileNav(false)} className="w-screen h-screen bg-black/40 absolute top-0 left-0" /> : ""}

      <ul
        className={`${navOpen ? "left-0" : "-left-full"} 
      absolute top-0 w-80 md:w-[400px] transition-all duration-500 bg-white dark:bg-neutral-800 dark:text-white text-slate-950 px-8 pt-14 h-screen`}
      >
        <li className="flex gap-4 items-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[url('/images/my.webp')] bg-cover bg-center" />
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl md:text-3xl font-bold">{METADATA.creator}</h1>
            <p className="text-sm animate-pulse">Frontend Developer</p>
            <div className="flex items-center gap-2">
              <p className="font-semibold font-mono rounded-tr-md rounded-bl-md border border-neutral-700 bg-neutral-400 text-slate-950 p-1 text-sm">Student</p>
              <p className="font-semibold font-mono rounded-tr-md rounded-bl-md border border-neutral-700 bg-neutral-400 text-slate-950 p-1 text-sm">Hireable</p>
            </div>
          </div>
        </li>

        <li className="mt-8 flex flex-col gap-4">
          <div className="w-full h-[2px] bg-neutral-400" />
          {Menu.map((menu, index) => (
            <Link
              href={menu.pathName}
              key={index}
              onClick={() => handleMobileNav(false)}
              className={`${menu.pathName === path ? "dark:bg-neutral-950 bg-neutral-300 dark:text-white text-neutral-800" : ""} 
            flex items-center gap-2 p-2 hover:bg-neutral-200 transition-all duration-300 hover:dark:bg-neutral-900 hover:scale-105 rounded`}
              aria-label={menu.label}
            >
              <menu.Svg className="w-6 h-6" />
              <p>{menu.label}</p>
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  );
}
