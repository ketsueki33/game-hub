import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack padding="10px">
            <Switch
                id="colorMode"
                colorScheme="green"
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
            />
            <Text whiteSpace="nowrap">Dark Mode</Text>
        </HStack>
    );
}

export default ColorModeSwitch;
