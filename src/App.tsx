import { Link } from "react-router-dom";
import "./App.css";

import { Box } from "@radix-ui/themes";
import { patheConfigs } from "./config/pathConfig";
import type { PathConfig } from "./config/pathConfig";
import Demo from "./components/Demo";

function App() {
  return (
    <Box className="flex w-full flex-col items-center justify-center text-lg text-slate-50">
      <Box className="pb-1">
        下方連結導向對應githubpages，hover標題可以預覽縮圖
      </Box>
      {patheConfigs.map((pathConfig: PathConfig) => {
        return <Demo key={pathConfig.name} {...pathConfig} />;
      })}
      <Box className="py-1">
        *切版素材來自 :
        <Box className="indent-8">
          <Link
            className="text-red-500"
            to="https://www.frontendmentor.io/"
            target="_blank"
          >
            frontend-mentor
          </Link>
          ，
          <Link
            className="text-red-500"
            to="https://dq.yam.com/"
            target="_blank"
          >
            地球圖輯隊
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
