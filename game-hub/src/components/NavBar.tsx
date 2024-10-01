import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image
          src={logo}
          boxSize="20"
          objectFit="fill"
          borderRadius="10"
          overflow="hidden"
        />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
