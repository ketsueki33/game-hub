import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import useGameQueryStore from "../store";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);
    const {
        error,
        data: games,
        isLoading,
        fetchNextPage,
        hasNextPage,
    } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

    if (error)
        return (
            <Box padding={20} textAlign="center">
                <Text color="tomato" fontSize="2xl">
                    {error.message}
                </Text>
            </Box>
        );
    const fetchedGamesLength =
        games?.pages.reduce((tot, page) => tot + page.results.length, 0) || 0;

    return (
        <>
            <InfiniteScroll
                dataLength={fetchedGamesLength}
                next={() => fetchNextPage()}
                hasMore={hasNextPage || false}
                loader={<Spinner />}
                endMessage={
                    <Text align="center">
                        <b>Yay! You have seen it all</b>
                    </Text>
                }
            >
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
                    {isLoading &&
                        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
                    {games?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.results.map((game) => (
                                <GameCard game={game} key={game.id} />
                            ))}
                        </React.Fragment>
                    ))}
                </SimpleGrid>
            </InfiniteScroll>
        </>
    );
}

export default GameGrid;
