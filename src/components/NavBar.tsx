import { HStack, Image, Text } from "@chakra-ui/react";
import icon from "../assets/game-hub.ico";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
    return (
        <HStack>
            <Image src={icon} boxSize="60px" />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
