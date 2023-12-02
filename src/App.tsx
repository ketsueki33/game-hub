import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem paddingBottom={4} area="nav">
                <NavBar />
            </GridItem>
            <Show above="lg">
                <GridItem paddingX={3} area="aside">
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid />
            </GridItem>
        </Grid>
    );
}

export default App;
