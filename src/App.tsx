import { Link } from "react-router-dom";
import "./App.css";
import * as HoverCard from "@radix-ui/react-hover-card";
import { Flex, Box, Heading, Text, Avatar } from "@radix-ui/themes";
import { patheConfigs } from "./config/pathConfig";
import type { PathConfig } from "./config/pathConfig";

function App() {
  return (
    <Box className="flex w-full flex-col items-center justify-center text-lg">
      <Box className="pb-1 ">
        下方連結導向對應githubpages，hover標題可以預覽縮圖
      </Box>
      {patheConfigs.map((pathConfig: PathConfig) => {
        const { name, url, imgSrc, description } = pathConfig;
        return (
          <Box className="bg-gray-50 py-4 px-5 mb-1 mx-2 w-1/2">
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link
                  className="cursor-pointer text-red-500"
                  to={url}
                  target="_blank"
                >
                  {name}
                </Link>
              </HoverCard.Trigger>
              <HoverCard.Content className="bg-lime-50 rounded-md shadow-md">
                <Box className="flex flex-col gap-5">
                  <img src={imgSrc} className="w-[450px]" />
                  <Box className="p-4">
                    <Box className="text-2xl font-black mb-1">{name}</Box>
                    <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
                      {description}
                    </Text>
                  </Box>
                </Box>
              </HoverCard.Content>
            </HoverCard.Root>{" "}
          </Box>
        );
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
