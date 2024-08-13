import { Box, Heading } from "@chakra-ui/react";
import ContentList from "./ContentList.js";

const Main = () => {
    return (
        <Box
            bg="gray.900"
            p={6}
            minHeight="100vh"
        >
            <Heading as="h1" size="xl" color="white" mb={6}>
                Tigerhall Library
            </Heading>

            <ContentList />
        </Box>
    );
};

export default Main;
