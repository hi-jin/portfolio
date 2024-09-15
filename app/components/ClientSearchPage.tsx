'use client'

import SearchResults from './SearchResults';
import AppBar from './AppBar';

type Post = {
    thumbnail: any;
    date: string;
    title: string;
    categories: string[];
    id: string;
};

export default function ClientSearchPage({
    allPosts,
    searchParams
}: {
    allPosts: Post[],
    searchParams: { q: string }
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <AppBar />
            <div className="flex-grow pt-16">
                <SearchResults allPosts={allPosts} q={searchParams.q} />
            </div>
        </div>
    );
}