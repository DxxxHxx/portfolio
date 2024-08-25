import {
  IInfoList,
  ILinkList,
  IMenuList,
  IProjectList,
  ISkillList,
} from "./types/interface";
import githubLogo from "./assets/github-mark.png";
import blogLogo from "./assets/blogLogo.png";
import todaysDiscovery from "./assets/projectThumbnail/오늘의 발견.png";

export const menuList: IMenuList[] = [
  { id: 1, category: "About" },
  { id: 2, category: "Skills" },
  { id: 3, category: "Projects" },
  { id: 4, category: "Contact" },
];

export const infoList: IInfoList[] = [
  { id: 1, emoji: "🙋‍♂️", text: "이동훈" },
  { id: 2, emoji: "🎂", text: "1999. 12. 03" },
  { id: 3, emoji: "🏠", text: "대구 북구" },
  { id: 4, emoji: "📭", text: "donghun1163@gmail.com" },
  { id: 5, emoji: "🎓", text: "계명대학교 ( 컴퓨터공학과 )" },
];

export const linkList: ILinkList[] = [
  {
    id: 1,
    href: "https://github.com/DxxxHxx/",
    src: githubLogo,
    alt: "github logo",
    text: "Git",
  },
  {
    id: 2,
    href: "https://velog.io/@dxxxhxx_/posts",
    src: blogLogo,
    alt: "blog logo",
    text: "Blog",
  },
];

export const skillList: ISkillList[] = [
  { id: 1, name: "HTML", value: 80 },
  { id: 2, name: "CSS", value: 80 },
  { id: 3, name: "JavaScript", value: 60 },
  { id: 4, name: "React", value: 70 },
  { id: 5, name: "TypeScript", value: 50 },
  { id: 6, name: "Styled-Components", value: 60 },
  { id: 7, name: "Tailwind", value: 70 },
  { id: 8, name: "Redux", value: 45 },
  { id: 9, name: "Recoil", value: 50 },
  { id: 10, name: "Zustand", value: 70 },
  { id: 11, name: "React Query", value: 75 },
  { id: 12, name: "Github", value: 70 },
];

export const projectList: IProjectList[] = [
  {
    id: 1,
    Contribution: 100,
    links: {
      github: "https://github.com/DxxxHxx/Today-s-discovery",
      deploy: "https://dxxxhxx.github.io/Today-s-discovery/",
    },
    tech: ["HTML", "CSS"],
    title: "오늘의 발견",
    period: "23.09.07 ~ 23.09.11",
    previewImg: todaysDiscovery,
    projectType: "personal",
    desc: "쿠팡 웹페이지의 <오늘의 발견> 영역을 마크업한 결과물입니다.",
  },
  {
    id: 2,
    Contribution: 100,
    links: {
      github: "https://github.com/DxxxHxx/Today-s-discovery",
      deploy: "https://dxxxhxx.github.io/Today-s-discovery/",
    },
    tech: ["HTML", "CSS"],
    title: "오늘의 발견",
    period: "23.09.07 ~ 23.09.11",
    previewImg: todaysDiscovery,
    projectType: "personal",
    desc: "쿠팡 웹페이지의 <오늘의 발견> 영역을 마크업한 결과물입니다.",
  },
  {
    id: 3,
    Contribution: 100,
    links: {
      github: "https://github.com/DxxxHxx/Today-s-discovery",
      deploy: "https://dxxxhxx.github.io/Today-s-discovery/",
    },
    tech: ["HTML", "CSS"],
    title: "오늘의 발견",
    period: "23.09.07 ~ 23.09.11",
    previewImg: todaysDiscovery,
    projectType: "personal",
    desc: "쿠팡 웹페이지의 <오늘의 발견> 영역을 마크업한 결과물입니다.",
  },
];

///////////////

export const landingText =
  "안녕하세요. : ) 주니어 프론트엔드 개발자 이동훈입니다.";

export const staggerContainerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    y: [0, 5, 0],
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      y: { delay: 1.5, repeat: Infinity, duration: 2 },
    },
  },
};

export const staggerItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
