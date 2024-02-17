import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

function GameHeading() {
    const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const genre = useGenre(genreId);

    const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const platform = usePlatform(platformId);

    let heading = `${platform?.name || ""} ${genre?.name || ""}`;
    if (heading.length > 2) heading += " Games";
    return (
        <Heading marginBottom={3} as="h1">
            {heading}
        </Heading>
    );
}

export default GameHeading;
