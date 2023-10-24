import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenresSkeleton = () => {
  return (
    <List>
      <ListItem paddingY={"5px"}>
        <HStack>
          <Skeleton boxSize="40px" borderRadius={8}>
            <Image />
          </Skeleton>

          <Skeleton height="10px" width="100%"></Skeleton>
        </HStack>
      </ListItem>
    </List>
  );
};
export default GenresSkeleton;
