import { IInfoList, ILinkList, IMenuList } from "./types/interface";
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
