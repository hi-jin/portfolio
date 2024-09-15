'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface Post {
    id: string;
    date: string;
    title: string;
    thumbnail: string;
    categories: string[];
}

interface SearchResultsProps {
    allPosts: Post[];
    q: string;
}

export default function SearchResults({ allPosts, q }: SearchResultsProps) {
    const searchParams = useSearchParams();
    const [searchResults, setSearchResults] = useState<Post[]>([]);
    const searchTerm = q || searchParams.get('q') || '';

    useEffect(() => {
        const results = allPosts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.categories.some(category => category.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setSearchResults(results);
    }, [searchTerm, allPosts]);

    if (!searchTerm) return null;

    return (
        <div className="bg-white dark:bg-gray-900 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">'{searchTerm}' 검색 결과</h1>
                {searchResults.length > 0 ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {searchResults.map(({ id, date, title, thumbnail }) => (
                            <li key={id} className="border rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:scale-105">
                                <Link href={`/posts/${id}`}>
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={thumbnail}
                                            alt={title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                        <p className="text-gray-500">{date}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-xl">검색 결과가 없습니다.</p>
                )}
            </div>
        </div>
    );
}