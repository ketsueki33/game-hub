import { Box, SimpleGrid, Text } from "@chakra-ui/react";
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

    if (isLoading)
        return (
            <SimpleGrid
                columns={{
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 4,
                }}
                paddingY={10}
                spacing={7}
            >
                {skeletons.map((skeleton) => (
                    <GameCardSkeleton key={skeleton} />
                ))}
            </SimpleGrid>
        );

    if (error)
        return (
            <Box padding={20} textAlign="center">
                <Text color="tomato" fontSize="2xl">
                    {error.message}
                </Text>
            </Box>
        );

    return (
        <SimpleGrid
            columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
            }}
            paddingY={10}
            spacing={7}
        >
            {games.results.map((game) => (
                <GameCard game={game} key={game.id} />
            ))}
        </SimpleGrid>
    );
}

export default GameGrid;
