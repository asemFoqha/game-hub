import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenere, { Genre } from "../hooks/useGenere";
import getCropedImageUrl from "../utils/image-url";
import GenresSkeleton from "./GenresSkeleton";

interface Props {
  onSelectGenre: (genere: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: generes, error, isLoading } = useGenere();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  if (error) return null;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={2}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenresSkeleton key={skeleton} />)}
        {generes?.map((genere) => (
          <ListItem key={genere.id} paddingY={"5px"}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                src={getCropedImageUrl(genere.image_background)}
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genere.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genere)}
                variant="link"
                fontSize="lg"
              >
                {genere.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenreList;
