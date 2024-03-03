import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <NavBar />
            <Box p={10}>
                <Text fontSize="6xl">oops...</Text>
                <Text fontSize="3xl">
                    {isRouteErrorResponse(error)
                        ? "This page does not exist."
                        : "Unexpected error occurred."}
                </Text>
            </Box>
        </>
    );
}

export default ErrorPage;
