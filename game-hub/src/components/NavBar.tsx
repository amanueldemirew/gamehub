import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo (1).webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image
          src={logo}
          boxSize="90 100"
          objectFit="fill"
          borderEndEndRadius="30px"
          borderTopLeftRadius="30px"
          overflow="hidden"
        />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
