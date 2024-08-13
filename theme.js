import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        "tiger-orange": {
            50: '#FFF9F6',
            400: '#FFA97A',
            600: '#FF5900'
        },
    },
    components: {
        Progress: {
          baseStyle: {
            track: {
              bg: 'gray.400',
            },
            filledTrack: {
              bg: 'tiger-orange.600',
            },
          },
        },
    },
});

export default theme;
