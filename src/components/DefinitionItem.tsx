import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

function DefinitionItem({ term, children }: Props) {
    return (
        <Box my={5}>
            <Heading mb={1} as="dt" fontSize="md" color="gray.600">
                {term}
            </Heading>
            <Text fontSize="0.875rem">
                <dd>{children}</dd>
            </Text>
        </Box>
    );
}

export default DefinitionItem;
