import { HStack, Image } from "@chakra-ui/react";
import icon from "../assets/game-hub.ico";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
    return (
        <HStack padding={2}>
            <Image
                aria-label="refresh-button"
                cursor="pointer"
                onClick={() => window.location.reload()}
                src={icon}
                boxSize="60px"
            />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
