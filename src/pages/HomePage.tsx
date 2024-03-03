import { Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

function HomePage() {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <Show above="lg">
                <GridItem paddingX={3} area="aside">
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area="main" paddingX={9} paddingY={2}>
                <GameHeading />
                <HStack spacing={5}>
                    <PlatformSelector />
                    <SortSelector />
                </HStack>
                <GameGrid />
            </GridItem>
        </Grid>
    );
}

export default HomePage;
