import { ImageProps, Image, Box } from "@chakra-ui/react";
import bullsEye from "../assets/bullseye.svg";
import meh from "../assets/neutral-face.svg";
import thumbup from "../assets/thumbs-up.svg";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bullsEye, alt: "Recommended", boxSize: "35px" },
    5: { src: thumbup, alt: "Exceptional", boxSize: "25px" },
  };

  return (
    <Box paddingY={1}>
      <Image {...emojiMap[rating]} />
    </Box>
  );
};

export default Emoji;
