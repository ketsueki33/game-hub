import { Box } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number;
}

function GameTrailer({ gameId }: Props) {
    const { data, error, isLoading } = useTrailers(gameId);

    if (isLoading) return null;

    if (error) throw error;

    const first = data?.results[0];

    return first ? (
        <Box
            mb={5}
            as="video"
            src={first.data.max}
            poster={first.preview}
            controls
            preload="none"
            // aspectRatio={16 / 9}
            width="100%"
        />
    ) : null;
}

export default GameTrailer;
