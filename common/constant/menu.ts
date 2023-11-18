import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BiLayer } from "react-icons/bi";
import { FaCode, FaHome } from "react-icons/fa";
import { FaGrip } from "react-icons/fa6";
import { GiTreeBranch } from "react-icons/gi";
import { Project } from "../types/type";

export const Menu: Array<Project> = [
  { label: "Home", Svg: FaHome, pathName: "/" },
  { label: "About", Svg: AiOutlineDeploymentUnit, pathName: "/about" },
  { label: "All Projects", Svg: BiLayer, pathName: "/projects" },
  { label: "Linktree", Svg: GiTreeBranch, pathName: "/linktree" },
];
