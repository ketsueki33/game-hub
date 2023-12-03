import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onsSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

function SortSelector({ sortOrder, onsSelectSortOrder }: Props) {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release Date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average Rating" },
    ];

    const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton marginLeft={8} as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.label || "Relevance"}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem
                        onClick={() => onsSelectSortOrder(order.value)}
                        key={order.value}
                    >
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default SortSelector;
