import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSort: (item: string) => void;
  selectedSort: string | null;
}

const SortSelector: FC<Props> = ({ onSort, selectedSort }) => {
  const sorts = [
    { value: "", name: "Relevance" },
    { value: "-added", name: "Date added" },
    { value: "name", name: "Name" },
    { value: "-released", name: "Release date" },
    { value: "-metacritic", name: "Popularity" },
    { value: "-rating", name: "Average rating" },
  ];

  const currentOrder = sorts.find((item) => item.value == selectedSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sorted By: {currentOrder?.name || "Relevence"}
      </MenuButton>
      <MenuList>
        {sorts.map((item) => (
          <MenuItem
            key={item.value}
            onClick={() => onSort(item.value)}
            value={item.value}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default SortSelector;
