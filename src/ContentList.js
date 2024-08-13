import React, { useRef, useCallback } from "react";
import { Heading, SimpleGrid, Text, Box } from "@chakra-ui/react";
import Loader from "./Loader";
import { useSearch } from "../context/SearchContext";
import ShimmerLoader from "./ShimmerLoader";
import ContentCard from './ContentCard';

const ContentList = () => {
    const { loading, error, data, loadMore } = useSearch();
    const observer = useRef();

    const lastElementRef = useCallback(node => {
        if (loading) return <Loader />;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        });

        if (node) observer.current.observe(node);
    }, [loading, loadMore]);

    if (loading && data.length === 0) return <ShimmerLoader />;
    if (error) return <Text>Error: {error.message}</Text>;

    const hasResults = data && data.length > 0;

    return (
        <Box 
            width="100%" 
        >
            {hasResults ? (
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={6}
                    width="100%"
                    justifyContent={{ base: 'center', sm: 'start' }}
                >
                    {data.map((edge, index) => (
                        edge.__typename === 'Podcast' ? (
                            <ContentCard key={edge.id} 
                                edge={edge} 
                                ref={index === data.length - 1 ? lastElementRef : null}/>
                        ) : null
                    ))}
                </SimpleGrid>
            ) : (
                <Box textAlign="center" py={10}>
                    <Heading size="md" color="gray.500">No results found</Heading>
                    <Text color="gray.400" mt={4}>Try adjusting your search criteria.</Text>
                </Box>
            )}

            {loading && <Loader />}
        </Box>
    );
};

export default ContentList;
