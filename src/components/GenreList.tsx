import {
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
    Link,
    Text,
    Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import croppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
    const { data: genres, isLoading, error } = useGenres();

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
                        <HStack as={Link} onClick={() => onSelectGenre(genre)}>
                            <Image
                                boxSize="36px"
                                objectFit="cover"
                                borderRadius={8}
                                src={croppedImageUrl(genre.image_background)}
                            />
                            <Text
                                fontSize="sm"
                                fontWeight={
                                    selectedGenre?.id === genre.id ? "bold" : "lighter"
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
