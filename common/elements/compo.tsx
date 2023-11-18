import React from "react";

export default function Compo({ children }: { children: React.ReactNode }) {
  return <div className="my-8">{children}</div>;
}
