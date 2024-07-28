import { IInfoList, ILinkList, IMenuList, ISkillList } from "./types/interface";
import githubLogo from "./assets/github-mark.png";
import blogLogo from "./assets/blogLogo.png";

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
  { id: 5, name: "TypeScript", value: 60 },
  { id: 6, name: "Styled-Components", value: 60 },
  { id: 7, name: "Tailwind-Css", value: 70 },
  { id: 8, name: "Recoil", value: 60 },
  { id: 9, name: "Zustand", value: 70 },
  { id: 10, name: "React-Query", value: 75 },
  { id: 11, name: "Github", value: 100 },
];
