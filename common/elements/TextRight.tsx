"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

export default function TextScrollRight({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="overflow-hidden">
      <div
        style={{
          transform: isInView ? "none" : "translateX(400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        {children}
      </div>
    </div>
  );
}
