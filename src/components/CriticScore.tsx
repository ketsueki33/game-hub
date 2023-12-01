import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

function CriticScore({ score }: Props) {
    let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
    return (
        <Badge
            colorScheme={color}
            fontSize="15px"
            borderRadius={5}
            paddingX={2}
        >
            {score}
        </Badge>
    );
}

export default CriticScore;
