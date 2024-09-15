'use client';

import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { Post } from '../types/post';

export default function ClientSearchWrapper() {
    const [searchResults, setSearchResults] = useState<Post[]>([]);
    const [searchQuery] = useState('');

    useEffect(() => {
        // 여기에서 검색 로직을 구현합니다.
        // 예: API 호출 또는 로컬 데이터로 검색 수행
        const performSearch = async () => {
            // 검색 로직 구현
            // const results = await searchAPI(searchQuery);
            // setSearchResults(results);
        };

        if (searchQuery) {
            performSearch();
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    return (
        <div>
            <SearchBar />
            <SearchResults q={searchQuery} allPosts={searchResults} />
        </div>
    );
}