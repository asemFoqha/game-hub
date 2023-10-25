import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {}

const SortSelector: FC<Props> = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        test
      </MenuButton>
      <MenuList>
        <MenuItem>item1</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default SortSelector;
