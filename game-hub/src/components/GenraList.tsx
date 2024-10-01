import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenras from "../hooks/useGenras";
import getCroppedImageUrl from "../services/image-url";

const GenraList = () => {
  const { data, isloading, error } = useGenras();
  if (isloading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((genra) => (
        <ListItem key={genra.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genra.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text>{genra.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenraList;
