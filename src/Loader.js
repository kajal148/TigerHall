import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const Loader = () => {
    return (
        <Box textAlign="center" py={10}>
            <Spinner size="lg" color="gray.500" />
        </Box>
    );
};

export default Loader;
