import { AiFillMail } from "react-icons/ai";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { SocialMap } from "../types/type";

export const socialMap: Array<SocialMap> = [
  { SvgIcon: FaLinkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-nur-maulana-a13a92290", class: "fill-blue-700" },
  { SvgIcon: FaGithub, name: "Github", href: "https://github.com/MuhammadNurMaulana", class: "fill-black dark:fill-white" },
  { SvgIcon: FaWhatsapp, name: "Whatsapp", href: "https://wa.me/+6283137446693", class: "fill-green-500" },
  { SvgIcon: FaTelegram, name: "Telegram", href: "https://t.me/uqs64maul", class: "fill-blue-500" },
  { SvgIcon: FaInstagram, name: "Instagram", href: "https://www.instagram.com/ctizz4/", class: "fill-orange-600" },
  { SvgIcon: AiFillMail, name: "E-Mail", href: "mailto:muhammadnrmaulana@gmail.com", class: "fill-red-500" },
  { SvgIcon: FaDiscord, name: "Discord", href: "https://discord.gg/pST7m8WC", class: "fill-blue-700" },
];
