import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
    const { data: genres } = useGenres();
    const { data: platforms } = usePlatforms();
    const platform = platforms?.results.find((p) => p.id === gameQuery.platformId);
    const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
    let heading = `${platform?.name || ""} ${genre?.name || ""}`;
    if (heading.length > 2) heading += " Games";
    return (
        <Heading marginBottom={3} as="h1">
            {heading}
        </Heading>
    );
}

export default GameHeading;
