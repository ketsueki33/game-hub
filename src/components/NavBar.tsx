import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

interface Props {}

function NavBar({}: Props) {
    return (
        <HStack>
            <Image src={logo} boxSize="60px" />
            <Text>NavBar</Text>
        </HStack>
    );
}

export default NavBar;
