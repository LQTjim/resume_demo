import "./App.css";
import { Box } from "@radix-ui/themes";
import { patheConfigs } from "./config/pathConfig";
import type { PathConfig } from "./config/pathConfig";
import Demo from "./components/Demo";
import Announce from "./components/Announce";

function App() {
  return (
    <Box className="flex w-full flex-col items-center justify-center text-lg text-slate-50">
      <Box className="pb-1">
        下方連結點擊導向對應githubpages，hover標題可以預覽縮圖
      </Box>
      {patheConfigs.map((pathConfig: PathConfig) => {
        return <Demo key={pathConfig.name} {...pathConfig} />;
      })}
      <Announce />
    </Box>
  );
}

export default App;
