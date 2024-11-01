import {
  IIconList,
  IInfoList,
  ILinkList,
  IMainSkillList,
  IMenuList,
  IProjectList,
  ISkillList,
} from "./types/interface";
import githubLogo from "./assets/github-mark.png";
import blogLogo from "./assets/blogLogo.png";
import todaysDiscoveryPng from "./assets/projectThumbnail/png/todays-discovery.png";
import categoryBestPng from "./assets/projectThumbnail/png/category-best.png";
import coupangHeaderPng from "./assets/projectThumbnail/png/coupang-header.png";
import buildUpPng from "./assets/projectThumbnail/png/build-up.png";
import goodsPng from "./assets/projectThumbnail/png/goods.png";
import todaysDiscoveryWebp from "./assets/projectThumbnail/webp/todays-discovery.webp";
import categoryBestWebp from "./assets/projectThumbnail/webp/category-best.webp";
import coupangHeaderWebp from "./assets/projectThumbnail/webp/coupang-header.webp";
import buildUpWebp from "./assets/projectThumbnail/webp/build-up.webp";
import goodsWebp from "./assets/projectThumbnail/webp/goods.webp";
import { splitText } from "./util/splitText";
import styledComponentsLogo from "./assets/skillLogo/styled-components.png";
import twLogo from "./assets/skillLogo/twlogo.svg";
import reduxLogo from "./assets/skillLogo/redux.svg";
import recoilLogo from "./assets/skillLogo/recoil.svg";
import zustandLogo from "./assets/skillLogo/zustand.png";
import reactQueryLogo from "./assets/skillLogo/reactQuery.png";
import framerMotionLogo from "./assets/skillLogo/framer-motion.png";

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
    contribution: 100,
    links: {
      github: "https://github.com/DxxxHxx/Today-s-discovery",
      deploy: "https://dxxxhxx.github.io/Today-s-discovery/",
    },
    tech: ["HTML", "CSS"],
    title: "오늘의 발견 (UI)",
    period: "23.09.07 ~ 23.09.11",
    previewImg: { png: todaysDiscoveryPng, webp: todaysDiscoveryWebp },
    projectType: "개인프로젝트",
    desc: "쿠팡 웹페이지의 <오늘의 발견> 영역을 마크업한 결과물입니다.",
  },
  {
    id: 2,
    contribution: 100,
    links: {
      github: "https://github.com/DxxxHxx/Coupang-Category-Best",
      deploy: "https://dxxxhxx.github.io/Coupang-Category-Best/",
    },
    tech: ["HTML", "CSS"],
    title: "카테고리 베스트 (UI)",
    period: "23.09.22 ~ 23.09.27",
    previewImg: { png: categoryBestPng, webp: categoryBestWebp },
    projectType: "개인프로젝트",
    desc: "쿠팡 웹페이지의 <오늘의 발견> 영역을 마크업한 결과물입니다.",
  },
  {
    id: 3,
    contribution: 100,
    links: {
      github: "https://github.com/DxxxHxx/Coupang-Header",
      deploy: "https://dxxxhxx.github.io/Coupang-Header/",
    },
    tech: ["HTML", "CSS"],
    title: "쿠팡 헤더 (UI)",
    period: "23.09.29 ~ 23.10.04",
    previewImg: { png: coupangHeaderPng, webp: coupangHeaderWebp },
    projectType: "개인프로젝트",
    desc: "쿠팡 웹페이지의 <오늘의 발견> 영역을 마크업한 결과물입니다.",
  },
  {
    id: 4,
    contribution: 100,
    links: {
      github: "https://github.com/DxxxHxx/build-up",
      deploy: "https://build-up-4925c.web.app/free",
    },
    tech: [
      "Javascript",
      "React",
      "Typescript",
      "Tailwind-CSS",
      "Recoil",
      "Firebase",
    ],
    title: "build-up (축구 커뮤니티)",
    period: "24.01 ~ 24.02 (약 5주)",
    previewImg: { png: buildUpPng, webp: buildUpWebp },
    projectType: "개인프로젝트",
    desc: "쿠팡 웹페이지의 <오늘의 발견> 영역을 마크업한 결과물입니다.",
  },
  {
    id: 5,
    contribution: 50,
    links: {
      github: "https://github.com/2024TeamUnity/Goods_FE",
      deploy: "https://goods-trade.vercel.app/",
    },
    tech: [
      "Javascript",
      "React",
      "Typescript",
      "Tailwind-CSS",
      "Recoil",
      "React-Query",
      "STOMP",
      "MSW",
    ],
    title: "Goods (중고거래 서비스)",
    period: "24.04 ~ 23.06 (약 6주)",
    previewImg: { png: goodsPng, webp: goodsWebp },
    projectType: "팀 프로젝트 (총 인원 5, 백엔드 2, 프론트엔드 3)",
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
      duration: 1,
      y: {
        delay: splitText(landingText).length * 0.3,
        repeat: Infinity,
        duration: 2,
      },
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

export const menuList: IMenuList[] = [
  { id: 0, category: "Home" },
  { id: 1, category: "About" },
  { id: 2, category: "Skills" },
  { id: 3, category: "Projects" },
  { id: 4, category: "Contact" },
];

export const mainSkillList: IMainSkillList[] = [
  {
    id: 1,
    name: "HTML/CSS",
    desc: [
      "웹표준을 지키려 노력합니다.",
      "styled-component, tailwindcss를 활용할 수 있습니다.",
      "반응형 디자인을 구현 할 수 있습니다.",
    ],
  },
  {
    id: 2,
    name: "Javascript",
    desc: [
      "ES6+ 문법에 익숙합니다.",
      "JS엔진, 브라우저의 동작원리에 대해 이해하고 있습니다.",
      "Typescript를 사용 할 수 있습니다.",
    ],
  },

  {
    id: 3,
    name: "React",
    desc: [
      "Zustands,Recoil,React-query등 상태관리 라이브러리 사용 경험이 있습니다.",
      "성능 개선 경험이 있습니다.",
      "재사용성을 고려한 컴포넌트를 작성하려 노력합니다.",
    ],
  },
];

export const subSkillList: IIconList[] = [
  { id: 1, logo: styledComponentsLogo },
  { id: 2, logo: twLogo },
  { id: 3, logo: reduxLogo },
  { id: 4, logo: recoilLogo },
  { id: 5, logo: zustandLogo },
  { id: 6, logo: reactQueryLogo },
  { id: 7, logo: githubLogo },
  { id: 8, logo: framerMotionLogo },
];
