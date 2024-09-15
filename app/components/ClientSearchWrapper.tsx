'use client';

import { Suspense, useDeferredValue } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useSearchParams } from 'next/navigation';

export default function ClientSearchWrapper() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('q') || '';
    const deferredQuery = useDeferredValue(searchQuery);
    const isStale = searchQuery !== deferredQuery;

    return (
        <div>
            <SearchBar />
            <Suspense fallback={<div>검색 결과 로딩 중...</div>}>
                <div style={{ opacity: isStale ? 0.5 : 1 }}>
                    <SearchResults q={decodeURIComponent(deferredQuery)} allPosts={[]} />
                </div>
            </Suspense>
        </div>
    );
}