import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedImageUrl from "../services/image-url";

function GenreList() {
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
                        <Text fontSize="md">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;
