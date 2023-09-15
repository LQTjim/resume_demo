import jianshenbaoleiURL from "/jianshenbaolei.jpg";
import tujidueiURL from "/tujiduei.jpg";
import twittercopyURL from "/twittercopy.jpg";

export type PathConfig = {
  name: string;
  url: string;
  ytUrl?: string;
  originUrl?: string;
  imgSrc: string;
  description: string;
  shouldDisplay: boolean;
};
export const patheConfigs: PathConfig[] = [
  {
    name: "地球圖輯隊",
    url: "https://lqtjim.github.io/bootstraphomework-carousel-card/",
    originUrl: "https://dq.yam.com/",
    imgSrc: `${tujidueiURL}`,
    description: "使用bootstrap，SASS。",
    shouldDisplay: true,
  },
  {
    name: "old twitter copy",
    url: "https://lqtjim.github.io/bootstrap5-twitter/",
    originUrl: "https://twitter.com/home",
    imgSrc: `${twittercopyURL}`,
    description: "使用SASS",
    shouldDisplay: true,
  },
  {
    name: "健身堡壘",
    url: "https://github.com/LQTjim/g4_final_project_frontend_co",
    ytUrl: "https://youtu.be/iMgnutnCtsE?t=2888",
    imgSrc: `${jianshenbaoleiURL}`,
    description: `(48:08-53:48，約5分鐘)使用NEXT，NODE，MySQL...`,
    shouldDisplay: true,
  },
  {
    name: "results-summary-component-main",
    url: "https://lqtjim.github.io/results-summary-component-main/",
    originUrl: "",
    imgSrc: "",
    description: "",
    shouldDisplay: false,
  },
];
