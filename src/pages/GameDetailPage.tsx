import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

function GameDetailPage() {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <>
            <Heading mb={3}>{game.name}</Heading>
            <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
        </>
    );
}

export default GameDetailPage;
