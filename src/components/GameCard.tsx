import { FC } from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "../utils/image-url";

interface Props {
  game: Game;
}

const GameCard: FC<Props> = ({ game }) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getCropedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={2}>
          <PlatformIconList
            platforms={
              game.parent_platforms &&
              game.parent_platforms.map((platform) => platform.platform)
            }
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
export default GameCard;
