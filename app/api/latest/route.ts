import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: true, message: "Fething Succes", data });
}

const data = [
  {
    title: "Maulana Personal Website",
    link: "https://maulana-personal-website.vercel.app/",
    github: "https://github.com/Maulana-Code/maulana-personal-website",
    tag: [
      {
        tag: "Website",
      },
      {
        tag: "Portfolio",
      },
    ],
    image: "/images/project2.webp",
    alt: "Personal Website Portofolio",
    desc: "I create personal website portfolio projects with Next JS, Tailwind, Framer and several features such as home, about, projects, articles, responsiveness and many more.",
    img: [
      {
        image: "/images/tailwind.png",
        alt: "Tailwind CSS",
        title: "TailwindCSS",
        name: "next",
      },
      {
        image: "/images/typescript.png",
        alt: "Typescript",
        title: "Typescript",
      },
    ],
  },

  {
    title: "Linder Construction",
    link: "https://linder-construction.vercel.app/",
    github: "https://github.com/MuhammadNurMaulana/linder-construction",
    tag: [
      {
        tag: "Website",
      },
      {
        tag: "Company",
      },
    ],
    image: "/images/project1.webp",
    alt: "Linder Construction",
    desc: "Linder Construction Company, a company that operates in the field of building construction with modern designs and also presents beautiful buildings. I created this website using the latest technology Next Js and Tailwind CSS with featured main project, blog, service, ervices, contact, about, home, all projects. We are ready to help you build the building you want, please contact us.",
    img: [
      {
        image: "/images/tailwind.png",
        alt: "Tailwind CSS",
        title: "TailwindCSS",
        name: "next js",
      },
      {
        image: "/images/typescript.png",
        alt: "Typescript",
        title: "Typescript",
      },
    ],
  },
];
