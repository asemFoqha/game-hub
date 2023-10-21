import { Badge } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  score: number;
}

const CriticScore: FC<Props> = ({ score }) => {
  let color = score > 75 ? "green" : score > 60 ? "red" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};
export default CriticScore;
