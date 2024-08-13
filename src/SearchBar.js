import React, { useCallback } from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSearch } from "../context/SearchContext";

const SearchBar = () => {
    const { searchQuery, updateSearchQuery } = useSearch();

    return (
        <Box
            display="flex"
            alignItems="center"
            flex="1"
            justifyContent="center"
        >
            <InputGroup maxW="500px">
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="white" />}
                />
                <Input
                    value={searchQuery}
                    onChange={(e) => updateSearchQuery(e.target.value)}
                    type="text"
                    placeholder="Search"
                    bg="gray.900"
                    color="gray.400"
                    _placeholder={{ color: "gray.700" }}
                    borderRadius="md"
                    border="1px"
                    borderColor="gray.700"
                    _focus={{
                        borderColor: "gray.700",
                        boxShadow: "0 0 0 1px gray.700"
                    }}
                />
            </InputGroup>
        </Box>
    );
};

export default SearchBar;