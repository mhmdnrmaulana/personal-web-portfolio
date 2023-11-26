"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContainerScroll({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.5,
        ease: [0, 0.7, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
