export type PathConfig = {
  name: string;
  url: string;
  originUrl: string;
  imgSrc?: string;
  description: string;
  shouldDisplay: boolean;
};
export const patheConfigs: PathConfig[] = [
  {
    name: "地球圖輯隊",
    url: "https://lqtjim.github.io/bootstraphomework-carousel-card/",
    originUrl: "https://www.frontendmentor.io/",
    imgSrc: "/tujiduei.jpg",
    description: "使用bootstrap，SASS。",
    shouldDisplay: true,
  },
  {
    name: "old twitter copy",
    url: "https://lqtjim.github.io/bootstrap5-twitter/",
    originUrl: "https://twitter.com/home",
    imgSrc: "/twittercopy.jpg",
    description: "使用SASS",
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
