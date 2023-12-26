import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
    gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
    const platform = usePlatform(gameQuery.platformId);
    const genre = useGenre(gameQuery.genreId);
    let heading = `${platform?.name || ""} ${genre?.name || ""}`;
    if (heading.length > 2) heading += " Games";
    return (
        <Heading marginBottom={3} as="h1">
            {heading}
        </Heading>
    );
}

export default GameHeading;
