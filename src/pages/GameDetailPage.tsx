import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";

function GameDetailPage() {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <>
            <Heading mb={3}>{game.name}</Heading>
            <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
            <GameAttributes game={game} />
            <GameTrailer gameId={game.id} />
        </>
    );
}

export default GameDetailPage;
