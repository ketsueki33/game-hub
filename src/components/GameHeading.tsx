import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
    let heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""}`;
    if (heading.length > 2) heading += " Games";
    return (
        <Heading marginBottom={3} as="h1">
            {heading}
        </Heading>
    );
}

export default GameHeading;
