import { Box, keyframes, SimpleGrid } from "@chakra-ui/react";

const shimmer = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
`;

const ShimmerLoader = () => {
    return (
        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={6}>
            {[...Array(6)].map((_, index) => (
                <Box
                    key={index}
                    bg="gray.700"
                    borderRadius="md"
                    overflow="hidden"
                    p={4}
                    position="relative"
                    h="150px"
                >
                    <Box
                        width="100%"
                        height="50px"
                        bg="gray.600"   
                        borderRadius="md"
                    >
                        <Box
                            width="100%"
                            height="100%"
                            bg="linear-gradient(90deg, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 75%)"
                            animation={`${shimmer} 1.5s infinite`}
                        />
                    </Box>
                    
                    <Box
                        pt={2}
                        pb={4}
                        pl={1}
                        position="relative"
                        zIndex={2}
                        height="100%"
                        display="flex"
                        flexDirection="column"
                    >
                        <Box
                            height="20px"
                            bg="gray.600"
                            borderRadius="md"
                            mb={2}
                        />
                        <Box
                            height="15px"
                            bg="gray.600"
                            borderRadius="md"
                            mb={2}
                        />
                    </Box>
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default ShimmerLoader;
