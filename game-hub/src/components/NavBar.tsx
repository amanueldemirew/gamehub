import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo (1).webp";
const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize="100" objectFit="fill" />
        <Text>NavBar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
