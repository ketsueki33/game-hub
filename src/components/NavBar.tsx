import { Button, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import icon from "../assets/game-hub.ico";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
    resetGameQuery: () => void;
}

function NavBar({ onSearch, resetGameQuery}: Props) {
    return (
        <HStack>
            <IconButton onClick={resetGameQuery} margin={1} aria-label="refresh button">
                <Image src={icon} width="80px" />
            </IconButton>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
