import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
    return (
        <Card maxW="600px" paddingX="auto" borderRadius={10} overflow="hidden">
            <Skeleton height="300px" width="600px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}

export default GameCardSkeleton;
