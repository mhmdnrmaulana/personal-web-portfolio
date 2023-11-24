import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BiLayer } from "react-icons/bi";
import { GiTreeBranch } from "react-icons/gi";
import { Project } from "../types/type";
import { FaHome } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

export const Menu: Array<Project> = [
  { label: "Home", Svg: FaHome, pathName: "/" },
  { label: "About", Svg: AiOutlineDeploymentUnit, pathName: "/about" },
  { label: "All Projects", Svg: BiLayer, pathName: "/projects" },
  { label: "Linktree", Svg: GiTreeBranch, pathName: "/linktree" },
  { label: "Contact", Svg: MdContacts, pathName: "/contact" },
];
