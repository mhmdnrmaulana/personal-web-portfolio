"use client";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { listNav } from "@/common/service/maping";
import { motion } from "framer-motion";
import { METADATA } from "@/common/constant/metadata";

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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Navbar() {
  const [navOpen, setNavOpen] = React.useState<boolean>(false);

  const pathname = usePathname();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={`fixed left-0 top-0 z-50 md:px-12 py-4 max-w-max${navOpen ? "bg-slate-200 dark:bg-black h-screen px-4 w-full md:max-w-max" : "bg-transparent"}`}>
      <button aria-label="change to translate-x button" onClick={() => toggleNav()} className={`text-slate-800 dark:text-white ${navOpen ? "translate-x-[19rem] max-w-max" : ""} transition-all duration-500`}>
        {navOpen ? <MdKeyboardDoubleArrowLeft size={30} /> : <MdKeyboardDoubleArrowRight size={30} />}
      </button>

      <motion.ul variants={container} initial="hidden" animate="visible">
        <div className={`${navOpen ? "hidden" : "flex flex-col lg:flex-row gap-8 mt-4 md:mt-2 pl-2"}`}>
          {listNav.map((list, index) => (
            <motion.li key={index} variants={item}>
              <Link aria-label={`Link to ${list.name} page`} href={list.href} key={index} className="group flex flex-col relative">
                <h2 className="hidden transition-all text-sm duration-300 group-hover:block absolute -top-[200%] bg-white rounded-md py-1 px-4 text-slate-950">{list.name}</h2>
                {list.icons}
              </Link>
            </motion.li>
          ))}
        </div>
      </motion.ul>

      <div className={`${navOpen ? "block" : "hidden"}`}>
        <div className={`${navOpen ? "" : ""}  relative transition-all duration-500`}>
          <div className="flex gap-4 items-center">
            <div className="w-24 h-24 rounded-full bg-white" />
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-3xl text-slate-900 dark:text-white">{METADATA.creator}</h2>
              <p className="text-sm font-semibold text-slate-900 dark:text-white animate-pulse">Frontend Web Developer</p>
              <div className="flex items-center gap-2">
                <p className="px-4 border border-slate-950 dark:border-white dark:text-white rounded-bl-lg rounded-tr-lg text-sm font-bold text-slate-800">Hireable</p>
                <p className="px-4 border border-slate-950 dark:border-white dark:text-white rounded-bl-lg rounded-tr-lg text-sm font-bold text-slate-800">Student</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-slate-950 my-8" />

          <div className="flex flex-col gap-4 font-normal text-slate-800">
            {listNav.map((item, index) => (
              <Link onClick={() => setNavOpen(!navOpen)} aria-label={`Link To ${item.name}`} href={item.href} key={index} className={`group dark:text-white`}>
                <div className={`flex items-center gap-4 dark:group-hover:bg-slate-800 group-hover:scale-110 px-2 group-hover:px-2 rounded-md transition-all duration-300 py-2 ${pathname === item.href ? " dark:bg-slate-800" : ""}`}>
                  <div className={`${index == 3 ? "animate-spin" : ""}`}>{item.icons}</div>
                  <h2 className="text-sm font-semibold font-mono">{item.name}</h2>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-slate-800 dark:text-white">
            <p>Made by Muhammad Nur Maulana</p>
            <p>All Right Reserved</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
