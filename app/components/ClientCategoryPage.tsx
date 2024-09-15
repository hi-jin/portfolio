'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import SearchResults from './SearchResults';
import { Post } from '../types/post';

function CategoryPageContent({ categoryPosts, category }: { categoryPosts: Post[], category: string }) {
    const searchParams = useSearchParams();
    const q = searchParams.get('q');

    return <SearchResults allPosts={categoryPosts} q={q || ''} category={category} />;
}

export default function ClientCategoryPage({ categoryPosts, category }: { categoryPosts: Post[], category: string }) {
    return (
        <Suspense fallback={<div>로딩 중...</div>}>
            <CategoryPageContent categoryPosts={categoryPosts} category={category} />
        </Suspense>
    );
}