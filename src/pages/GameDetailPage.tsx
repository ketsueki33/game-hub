import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

function GameDetailPage() {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <>
            <Heading mb={3}>{game.name}</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
                <GridItem>
                    <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
                    <GameAttributes game={game} />
                </GridItem>
                <GridItem>
                    <GameTrailer gameId={game.id} />
                    <GameScreenshots gameId={game.id} />
                </GridItem>
            </SimpleGrid>
        </>
    );
}

export default GameDetailPage;
