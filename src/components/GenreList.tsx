import {
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
    Button,
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
        <List>
            {genres.map((genre) => (
                <ListItem key={genre.id} paddingY="6px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={croppedImageUrl(genre.image_background)}
                        />
                        <Button
                            onClick={() => onSelectGenre(genre)}
                            variant="link"
                            fontSize="sm"
                            fontWeight={
                                selectedGenre?.id === genre.id
                                    ? "bold"
                                    : "lighter"
                            }
                        >
                            {genre.name === "Massively Multiplayer"
                                ? "MMO"
                                : genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;
