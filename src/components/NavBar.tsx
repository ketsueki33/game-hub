import { HStack, Image } from "@chakra-ui/react";
import icon from "../assets/game-hub.ico";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

function NavBar() {
    const navigate = useNavigate();
    const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);
    return (
        <HStack padding={2}>
            <Image
                aria-label="refresh-button"
                cursor="pointer"
                onClick={() => {
                    navigate("/");
                    resetGameQuery();
                }}
                src={icon}
                boxSize="60px"
            />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
