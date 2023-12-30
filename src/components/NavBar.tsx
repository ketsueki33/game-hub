import { Button, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import icon from "../assets/game-hub.ico";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
    return (
        <HStack>
            <IconButton
                onClick={() => window.location.reload()}
                margin={1}
                aria-label="refresh button"
            >
                <Image src={icon} width="80px" />
            </IconButton>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
