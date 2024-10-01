import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenras, { Genra } from "../hooks/useGenras";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenra: (genra: Genra) => void;
  selectedGenre: Genra | null;
}

const GenraList = ({ selectedGenre, onSelectedGenra }: Props) => {
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
            <Button
              fontWeight={genra.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectedGenra(genra)}
              fontSize={"lg"}
              variant="link"
            >
              {genra.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenraList;
