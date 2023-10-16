import jianshenbaoleiURL from "/jianshenbaolei.jpg";
import tujidueiURL from "/tujiduei.jpg";
import twittercopyURL from "/twittercopy.jpg";
import ubikeURL from "/ubike.jpg";
import reactTodoListURL from "/reactTodoList.jpg";

export type PathConfig = {
  name: string;
  tags: string[];
  url: string;
  codeUrl: string;
  ytUrl?: string;
  originUrl?: string;
  imgSrc: string;
  description: string;
  shouldDisplay: boolean;
};
export const patheConfigs: PathConfig[] = [
  {
    name: "地球圖輯隊",
    tags: ["切版", "SASS", "bootstrap"],
    url: "https://lqtjim.github.io/bootstraphomework-carousel-card/",
    codeUrl: "https://github.com/LQTjim/bootstraphomework-carousel-card",
    originUrl: "https://dq.yam.com/",
    imgSrc: `${tujidueiURL}`,
    description: "使用bootstrap，SASS的切版作品。",
    shouldDisplay: true,
  },
  {
    name: "old twitter copy",
    tags: ["切版", "SASS"],
    url: "https://lqtjim.github.io/bootstrap5-twitter/",
    codeUrl: "https://github.com/LQTjim/bootstrap5-twitter",
    originUrl: "https://twitter.com/home",
    imgSrc: `${twittercopyURL}`,
    description: "使用SASS，仿造twitter的切版作品。",
    shouldDisplay: true,
  },
  {
    name: "健身堡壘",
    tags: ["Next", "Node", "MySQL", "d3", "MUI", "JWT"],
    url: "https://github.com/LQTjim/g4_final_project_frontend_co",
    codeUrl: "",
    ytUrl: "https://youtu.be/iMgnutnCtsE?t=2888",
    imgSrc: `${jianshenbaoleiURL}`,
    description: `(48:08-53:48，約5分鐘)使用NEXT，NODE，MySQL...`,
    shouldDisplay: false,
  },
  {
    name: "ubike",
    tags: ["typescript", "SASS", "figma"],
    url: "https://lqtjim.github.io/ubike/",
    codeUrl: "",
    imgSrc: `${ubikeURL}`,
    description: `使用SASS、typescript、串接youbike API，選項使用Skelton處理，網速慢的使用者可以達成較佳的使用者體驗。`,
    shouldDisplay: true,
  },
  {
    name: "react todolist with TS",
    tags: ["typescript", "tailwind", "redux toolkit"],
    url: "https://lqtjim.github.io/vite-React-TS",
    codeUrl: "https://github.com/LQTjim/vite-React-TS",
    imgSrc: `${reactTodoListURL}`,
    description:
      "串接jsonplaceholder資料，在前端做分頁，基本CRUD，狀態管理使用redux toolkit，使用自製skelton讓資料在loading時畫面能有緩衝。",
    shouldDisplay: true,
  },
  {
    name: "results-summary-component-main",
    tags: ["CSS"],
    url: "https://lqtjim.github.io/results-summary-component-main/",
    codeUrl: "",
    originUrl: "",
    imgSrc: "",
    description: "",
    shouldDisplay: false,
  },
];
