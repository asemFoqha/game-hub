import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenere";
import { Platform } from "../hooks/useGames";

interface Props {
  genre: Genre | null;
  platform: Platform | null;
}

const GameHeading = ({ genre, platform }: Props) => {
  // platform genre Games
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading fontSize={"5xl"}>{heading}</Heading>;
};
export default GameHeading;
