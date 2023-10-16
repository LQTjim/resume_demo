import "./App.css";
import { Box } from "@radix-ui/themes";
import { patheConfigs } from "./config/pathConfig";
import type { PathConfig } from "./config/pathConfig";
import Demo from "./components/Demo";

function App() {
  return (
    <Box className="flex w-full flex-col items-center justify-center  ">
      <Box className="px-5 py-3 m-2 bg-white text-4xl rounded-md ">
        LQT作品合集，詳細資料包含網址及code
      </Box>
      <Box
        className="grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-4 gap-4 "
      >
        {patheConfigs.map((pathConfig: PathConfig) => {
          return <Demo key={pathConfig.name} {...pathConfig} />;
        })}
      </Box>
    </Box>
  );
}

export default App;
