'use client'

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

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow pt-16">
                <SearchResults allPosts={allPosts} q={q} />
            </div>
        </div>
    );
}