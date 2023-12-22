import { Box, Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
    return (
        <Box display="flex" justifyContent="center">
            <Card maxWidth="600px" borderRadius={10} overflow="hidden">
                <Skeleton height="300px" width="90vw" />
                <CardBody>
                    <SkeletonText />
                </CardBody>
            </Card>
        </Box>
    );
}

export default GameCardSkeleton;
