"use client";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import React from "react";

const disableScroll = ["/", "/about", "/projects", "/articles"];

export default function DisableScroll() {
  const pathname = usePathname();
  return <>{disableScroll.includes(pathname) && <NextTopLoader color="#428af5" initialPosition={0.08} crawlSpeed={300} speed={300} showSpinner={true} easing="ease" />}</>;
}
