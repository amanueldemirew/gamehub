import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo (2).webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Image
          src={logo}
          boxSize="20"
          objectFit="fill"
          borderRadius="10"
          overflow="hidden"
        />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
