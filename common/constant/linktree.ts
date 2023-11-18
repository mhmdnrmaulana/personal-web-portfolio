import { FaChrome, FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Linktree } from "../types/type";

export const linktree: Array<Linktree> = [
  { SvgIcon: FaChrome, name: "My Personal Website", href: "https://maulana-v3.vercel.app", class: "fill-black dark:fill-white", classBg: "border-b-black dark:border-b-white " },
  { SvgIcon: FaGithub, name: "Github", href: "https://github.com/MuhammadNurMaulana", class: "fill-black dark:fill-white", classBg: "border-b-black dark:border-b-white" },
  { SvgIcon: FaLinkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-nur-maulana-a13a92290", class: "fill-blue-700", classBg: "border-b-blue-700" },
  { SvgIcon: FaWhatsapp, name: "Whatsapp", href: "https://wa.me/+6283137446693", class: "fill-green-500", classBg: "border-b-green-500" },
  { SvgIcon: FaInstagram, name: "Instagram", href: "https://www.instagram.com/ctizz4/", class: "fill-orange-600", classBg: "border-b-orange-600" },
  { SvgIcon: FaDiscord, name: "Discord", href: "https://discord.gg/pST7m8WC", class: "fill-blue-700", classBg: "border-b-blue-700" },
];
