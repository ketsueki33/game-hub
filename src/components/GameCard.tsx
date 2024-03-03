import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import croppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    return (
        <Box _hover={{ transform: "scale(1.04)" }} transition="transform 0.125s ease-in">
            <Link to={"/games/" + game.slug}>
                <Card
                    maxWidth="600px"
                    marginX="auto"
                    borderRadius={10}
                    overflow={"hidden"}
                >
                    <Image src={croppedImageUrl(game.background_image)} />
                    <CardBody>
                        <HStack marginBottom={3} justifyContent="space-between">
                            <PlatformIconList
                                platforms={game.parent_platforms?.map((p) => p.platform)}
                            />
                            <CriticScore score={game.metacritic} />
                        </HStack>

                        <Heading fontSize="2xl">{game.name}</Heading>
                    </CardBody>
                </Card>
            </Link>
        </Box>
    );
}

export default GameCard;
