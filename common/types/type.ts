export type skillsMap = {
  Icon: any;
  Name: string;
  Class: string;
};

export type SocialMap = {
  SvgIcon: any;
  name: string;
  href: string;
  class: string;
};

export type Linktree = {
  SvgIcon: any;
  name: string;
  href: string;
  class: string;
  classBg: string;
};

export type Project = {
  label: string;
  Svg: any;
  pathName: string;
};

type ProjectImg = {
  index: number;
  name?: string;
  alt: string;
  image: string;
  title: string;
};

type ProjectTag = {
  tag: string;
};

export type AllProject = {
  index: number;
  title: string;
  link: string;
  github: string;
  image: string;
  alt: string;
  desc: string;
  tag: Array<ProjectTag>;
  img: Array<ProjectImg>;
};
