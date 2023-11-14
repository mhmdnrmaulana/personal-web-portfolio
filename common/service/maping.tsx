import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiOutlineDeploymentUnit } from "react-icons/ai";
import { BiAtom, BiLayer } from "react-icons/bi";
import { FaDiscord, FaHome, FaTelegram, FaWhatsapp } from "react-icons/fa";

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-nur-maulana-a13a92290",
    icon: <AiFillLinkedin size={30} />,
  },

  {
    name: "Github",
    href: "https://github.com/MuhammadNurMaulana",
    icon: <AiFillGithub size={30} />,
  },

  {
    name: "Whatsapp",
    href: "https://wa.me/+6283137446693",
    icon: <FaWhatsapp size={30} />,
  },

  {
    name: "Telegram",
    href: "https://t.me/uqs64maul",
    icon: <FaTelegram size={30} />,
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/ctizz4/",
    icon: <AiFillInstagram size={30} />,
  },

  {
    name: "E-Mail",
    href: "mailto:muhammadnrmaulana@gmail.com",
    icon: <AiFillMail size={30} />,
  },

  {
    name: "Discord",
    href: "https://discord.gg/pST7m8WC",
    icon: <FaDiscord size={30} />,
  },
];

export const listNav = [
  {
    name: "Home",
    href: "/",
    icons: <FaHome size={25} />,
  },
  {
    name: "About",
    href: "/about",
    icons: <AiOutlineDeploymentUnit size={25} />,
  },

  {
    name: "All Projects",
    href: "/projects",

    icons: <BiLayer size={25} />,
  },
  {
    name: "Article",
    href: "/articles",

    icons: <BiAtom size={25} />,
  },
];

export const skillsMap = [
  {
    name: "JAVA",
    image: "/images/java.png",
    alt: "Java",
  },
  {
    name: "HTML",
    image: "/images/html.png",
    alt: "HTML",
  },
  {
    name: "CSS",
    image: "/images/css.png",
    alt: "CSS",
  },
  {
    name: "Javascript",
    image: "/images/javascript.png",
    alt: "Javascript",
  },
  {
    name: "Bootstrap",
    image: "/images/bootstrap.png",
    alt: "Bootstrap",
  },
  {
    name: "Tailwind CSS",
    image: "/images/tailwind.png",
    alt: "Tailwind CSS",
  },
  {
    name: "Sass",
    image: "/images/sass.png",
    alt: "Sass",
  },
  {
    name: "Chakra UI",
    image: "/images/chakra.png",
    alt: "Chakra UI",
  },
  {
    name: "Typescript",
    image: "/images/typescript.png",
    alt: "Typescript",
  },
  {
    name: "React",
    image: "/images/react.png",
    alt: "React",
  },
  {
    name: "React Typescript",
    image: "/images/react.png",
    alt: "React Typescript",
  },
  {
    name: "Vite",
    image: "/images/vite.png",
    alt: "Vite",
  },
  {
    name: "Next JS",
    image: "/images/next.png",
    alt: "Next JS",
  },
  {
    name: "Firebase",
    image: "/images/firebase.png",
    alt: "Firebase",
  },
  {
    name: "PostgreSQL",
    image: "/images/postgre.png",
    alt: "PostgreSQL",
  },
];
