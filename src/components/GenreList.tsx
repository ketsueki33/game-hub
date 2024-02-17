import {
    HStack,
    Heading,
    Image,
    Link,
    List,
    ListItem,
    Spinner,
    Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

function GenreList() {
    const { data: genres, isLoading, error } = useGenres();
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

    if (isLoading) return <Spinner size="lg" color="gray.500" />;

    if (error) return null;

    return (
        <>
            <Heading fontSize="2xl" marginY={1}>
                Genres
            </Heading>
            <List>
                {genres.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="6px">
                        <HStack as={Link} onClick={() => setSelectedGenreId(genre.id)}>
                            <Image
                                boxSize="36px"
                                objectFit="cover"
                                borderRadius={8}
                                src={croppedImageUrl(genre.image_background)}
                            />
                            <Text
                                fontSize="sm"
                                fontWeight={
                                    selectedGenreId === genre.id ? "bold" : "lighter"
                                }
                            >
                                {genre.name === "Massively Multiplayer"
                                    ? "MMO"
                                    : genre.name}
                            </Text>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default GenreList;
