import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <section className="w-full py-12 md:py-16 pr-8 pl-12 md:pr-12 md:pl-28 lg:pl-[415px]">{children}</section>;
}
