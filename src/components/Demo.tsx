import { Box, Card, Inset, Text } from "@radix-ui/themes";
import type { PathConfig } from "../config/pathConfig";
import CustomDialog from "./Dialog";
const Demo = ({
  url,
  codeUrl,
  tags,
  name,
  imgSrc,
  description,
  shouldDisplay,
  ytUrl = "",
}: PathConfig) => {
  return shouldDisplay ? (
    <Card
      style={{
        maxWidth: 240,
        background: "white",
        borderRadius: "10px",
        display: "flex",
      }}
    >
      <Inset className="w-full !mb-2">
        <img className="w-full" src={`${imgSrc}`} alt="Bold typography" />
      </Inset>
      <div className="p-2 text-sm text-black">
        <Text as="div" className="font-bold text-xl !mb-2">
          {name}
        </Text>
        <Box className="flex flex-wrap gap-2 mb-2">
          {tags.map((v) => (
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              {v}
            </span>
          ))}
        </Box>
        <CustomDialog
          url={url}
          codeUrl={codeUrl}
          name={name}
          imgSrc={imgSrc}
          description={description}
          ytUrl={ytUrl}
        />
      </div>
    </Card>
  ) : null;
};

export default Demo;
