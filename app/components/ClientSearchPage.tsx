'use client'

import { Suspense, useDeferredValue } from 'react';
import SearchResults from './SearchResults';
import { Post } from '../types/post';
import { useSearchParams } from 'next/navigation';

export default function ClientSearchPage({
    allPosts,
}: {
    allPosts: Post[],
}) {
    const searchParams = useSearchParams();
    const q = searchParams.get('q') || '';
    const deferredQuery = useDeferredValue(q);
    const isStale = q !== deferredQuery;

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow pt-16">
                <Suspense fallback={<h2>검색 결과 로딩 중...</h2>}>
                    <div style={{ opacity: isStale ? 0.5 : 1 }}>
                        <SearchResults allPosts={allPosts} q={deferredQuery} />
                    </div>
                </Suspense>
            </div>
        </div>
    );
}