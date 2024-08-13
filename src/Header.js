import React from "react";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import desktopImage from '../public/svg/logo.svg';
import mobileImage from '../public/svg/logo-mobile.svg';
import SearchBar from "./SearchBar";

const Header = () => {
    const imageSrc = useBreakpointValue({
        base: mobileImage,
        md: desktopImage,
    });

    return (
        <Box
        display="flex"
        alignItems="center"
        bg="black"
        px={6}
        py={4}
        height="64px"
    >
        <Box
            display="flex"
            alignItems="center"
            mr={4}
        >
            <Image
                src={imageSrc}
                alt="Tigerhall"
            />
        </Box>

        <SearchBar />
    </Box>
    );
}
export default Header;
