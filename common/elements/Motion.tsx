"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGlobeAsia } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiFramer, SiNextdotjs } from "react-icons/si";
import { AllProject } from "../types/type";

export default function Motion({ projects, classname }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: isInView ? 1 : 0, scale: isInView ? 0 : 1 },
    visible: {
      opacity: isInView ? 1 : 0,
      scale: isInView ? 1 : 0,
      transition: {
        delayChildren: isInView ? 1 : 0,
        staggerChildren: isInView ? 0.5 : 0,
      },
    },
  };

  const item = {
    hidden: { y: isInView ? 50 : 0, opacity: isInView ? 0 : 0 },
    visible: {
      y: isInView ? 0 : 0,
      opacity: isInView ? 1 : 0,
    },
  };

  return (
    <div ref={ref}>
      <motion.ul variants={container} initial="hidden" animate="visible">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 mt-8">
          {projects.data &&
            projects.data.map((project: AllProject, index: number) => (
              <motion.li key={index} variants={item}>
                <div className="relative rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 bg-slate-100 dark:bg-black">
                  <Image width={1080} height={800} src={project.image} alt={project.alt} />
                  <h2 className={`text-sm font-semibold font-mono absolute -rotate-[60deg] -left-[4.5rem] -top-7 pt-16 pb-2 px-12 bg-blue-700 text-white ${classname}`}>LATEST</h2>
                  <Link href={project.link} target="_blank" className="flex items-center gap-2 max-w-max px-6 py-1 absolute right-0 top-0 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-bl-md">
                    <div className="animate-spin">
                      <FaGlobeAsia size={20} />
                    </div>
                    <p className="font-mono text-sm font-semibold">Demo</p>
                  </Link>

                  <div className="p-2">
                    <div className="flex items-center justify-between my-4">
                      <h1 className="font-bold text-xs md:text-lg ">{project.title}</h1>
                      <Link href={project.github} target="_blank" className="flex items-center gap-2 font-mono">
                        <AiFillGithub size={20} />
                        <p className="text-xs md:text-sm">Github</p>
                      </Link>
                    </div>
                    <p className="text-xs md:h-32 lg:h-24 text-justify">{project.desc}</p>

                    <div className="flex items-center gap-4">
                      {project.tag.map((item, index) => (
                        <div key={index}>
                          <h2 className="mt-4 font-mono text-sm border border-slate-600 rounded-md p-1 max-w-max bg-slate-300 text-slate-950">{item.tag}</h2>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-8">
                      {project.img.map((item, index) => (
                        <div key={index} className="flex flex-row items-center mt-4 gap-4">
                          {item.name === "next" && (
                            <div className="flex items-center gap-4">
                              <div className="group relative">
                                <p className="font-mono absolute -top-[200%] bg-white text-slate-950 py-2 px-4 rounded-lg text-sm font-semibold hidden group-hover:block">NextJS</p>
                                <SiNextdotjs size={20} />
                              </div>

                              <div className="group relative">
                                <p className="font-mono absolute -top-[200%] bg-white text-slate-950 py-2 px-4 rounded-lg text-sm font-semibold hidden group-hover:block">FramerMotion</p>
                                <SiFramer size={20} />
                              </div>
                            </div>
                          )}

                          {item.name === "next js" && (
                            <div className="group relative flex items-center gap-4">
                              <p className="font-mono absolute -top-[200%] bg-white text-slate-950 py-2 px-4 rounded-lg text-sm font-semibold hidden group-hover:block">NextJS</p>
                              <SiNextdotjs size={20} />
                            </div>
                          )}

                          <div className="group relative">
                            <p className="font-mono absolute -top-[200%] bg-white text-slate-950 py-2 px-4 rounded-lg text-sm font-semibold hidden group-hover:block">{item.title}</p>
                            <Image width={20} height={20} src={item.image} alt={item.alt} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
        </div>
      </motion.ul>
    </div>
  );
}
