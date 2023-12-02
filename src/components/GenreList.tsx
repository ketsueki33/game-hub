import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedImageUrl from "../services/image-url";

function GenreList() {
    const { data: genres } = useGenres();
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
