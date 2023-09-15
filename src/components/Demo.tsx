import * as HoverCard from "@radix-ui/react-hover-card";
import { Box, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import type { PathConfig } from "../config/pathConfig";
const Demo = ({
  url,
  name,
  imgSrc,
  description,
  shouldDisplay,
}: PathConfig) => {
  return shouldDisplay ? (
    <Box className="bg-gray-50 py-4 px-5 mb-2 mx-2 w-1/2 rounded-sm ">
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
          <Box className="flex flex-col gap-5 text-black">
            <img src={imgSrc} className="w-[450px]" />
            <Box className="p-4">
              <Box className="text-2xl font-black mb-1">{name}</Box>
              <Text>{description}</Text>
            </Box>
          </Box>
        </HoverCard.Content>
      </HoverCard.Root>{" "}
    </Box>
  ) : null;
};

export default Demo;
