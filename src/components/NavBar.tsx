import { HStack, Image, Text } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { FC } from "react";

interface Props {
  onSearch: (text: string) => void;
}

const NavBar: FC<Props> = ({ onSearch }) => {
  return (
    <HStack paddingRight={10}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
