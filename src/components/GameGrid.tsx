import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
    const { error, data: games, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 4,
                }}
                padding={10}
                spacing={7}
            >
                {isLoading &&
                    skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

                {games.map((game) => (
                    <GameCard game={game} key={game.id} />
                ))}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;
