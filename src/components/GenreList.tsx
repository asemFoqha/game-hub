import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenere from "../hooks/useGenere";
import getCropedImageUrl from "../utils/image-url";
import GenresSkeleton from "./GenresSkeleton";

const GenreList = () => {
  const { data: generes, error, isLoading } = useGenere();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenresSkeleton key={skeleton} />)}
      {generes?.map((genere) => (
        <ListItem key={genere.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="32px"
              src={getCropedImageUrl(genere.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{genere.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;

