import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import _ from 'lodash';
import { GET_ALL_PODCASTS } from '../graphql/queries';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    
    const { refetch } = useQuery(GET_ALL_PODCASTS, {
        skip: true,
    });

    const fetchContent = useCallback(async (filter) => {
        setLoading(true);
        try {
            const result = await refetch({ filter });
            const newEdges = result.data.contentCards.edges;
            const total = result.data.contentCards.meta.total;

            setData(prevData => {
                const updatedData = [...prevData, ...newEdges];
                setHasMore(newEdges.length > 0 && updatedData.length < total);
                return updatedData;
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [refetch]);

    const debouncedFetchContent = useCallback(
        _.debounce((query) => {
            fetchContent({
                keywords: query,
                limit: 5,
                offset: 0,
                types: ["PODCAST"]
            });
        }, 300),
        [fetchContent]
    );

    useEffect(() => {
        fetchContent({
            keywords: '',
            limit: 5,
            offset: 0,
            types: ["PODCAST"]
        });
    }, [fetchContent]);

    const loadMore = useCallback(() => {
        if (hasMore && !loading) {
            fetchContent({
                keywords: searchQuery,
                limit: 5,
                offset: offset + 5,
                types: ["PODCAST"]
            });
            setOffset(prevOffset => prevOffset + 5);
        }
    }, [fetchContent, hasMore, loading, searchQuery, offset]);

    const updateSearchQuery = useCallback((query) => {
        setSearchQuery(query);
        setData([]);
        setOffset(0);
        debouncedFetchContent(query);
    }, [debouncedFetchContent]);

    return (
        <SearchContext.Provider value={{ searchQuery, updateSearchQuery, data, loading, error, loadMore }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);
