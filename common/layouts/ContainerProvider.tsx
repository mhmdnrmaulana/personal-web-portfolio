"use client";
import { createContext } from "react";

interface ContextProps {
  fullPathName: string;
  setFullPathName: (titles: string) => void;
}

export const ContainerContext = createContext<ContextProps>({
  fullPathName: "",
  setFullPathName: () => {},
});
