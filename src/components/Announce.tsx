import { Box } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { patheConfigs } from "../config/pathConfig";

export default function Announce() {
  return (
    <Box className="py-1">
      *切版素材來自 :
      <Box className="indent-8">
        {patheConfigs.map((p, i) => {
          const link = (
            <Link key={p.name} className="text-red-500" to={p.originUrl}>
              {p.name}
            </Link>
          );
          if (patheConfigs.length - 1 === i) {
            return <>,{link}</>;
          }
          return link;
        })}
      </Box>
    </Box>
  );
}
