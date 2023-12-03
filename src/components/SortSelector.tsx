import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {}

function SortSelector({}: Props) {
    return (
        <Menu>
            <MenuButton marginLeft={8} as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem> Dummy</MenuItem>
                <MenuItem> Dummy</MenuItem>
                <MenuItem> Dummy</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default SortSelector;
