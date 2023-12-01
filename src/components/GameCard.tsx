import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import croppedImageUrl from "../services/image-url";

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    return (
        <Card maxW="600px" paddingX="auto" borderRadius={10} overflow={"hidden"}>
            <Image src={croppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack marginY={1} justifyContent="space-between">
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;
