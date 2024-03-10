import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string;
    limit: number;
}

function ExpandableText({ children, limit }: Props) {
    const [expanded, setExpanded] = useState(false);

    if (!children) return null;

    if (children.length <= limit) return <Text>{children}</Text>;

    const summary = children.substring(0, limit) + "...";

    return (
        <Text>
            {expanded ? children : summary}
            <Button
                ml={2}
                size="xs"
                fontWeight="bold"
                onClick={() => setExpanded((prev) => !prev)}
            >
                {expanded ? "Show less" : "Read more"}
            </Button>
        </Text>
    );
}

export default ExpandableText;
