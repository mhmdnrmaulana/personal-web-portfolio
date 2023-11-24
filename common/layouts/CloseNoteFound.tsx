"use client";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function CloseNoteFound({ children }: Props) {
  const pathname = usePathname();

  const disableNav = pathname === "/" || pathname === "/about" || pathname === "/projects" || pathname === "/linktree" || pathname === "/contact";

  return (
    <>
      {disableNav && <Navbar />}
      {children}
      {disableNav && <Footer />}
    </>
  );
}
