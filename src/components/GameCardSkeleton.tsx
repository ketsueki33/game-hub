import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card maxWidth="600px" borderRadius={10} overflow="hidden">
            <Skeleton height="300px" width="600px" />
            <CardBody>
              <SkeletonText />
            </CardBody>
          </Card>
        </div>

      );
}

export default GameCardSkeleton;
