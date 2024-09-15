'use client'

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const currentSearchTerm = searchParams.get('q');
        if (currentSearchTerm) {
            setSearchTerm(currentSearchTerm);
        }
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/?q=${encodeURIComponent(searchTerm.trim())}`);
        } else {
            router.push('/'); // 빈 문자열 검색 시 홈으로 이동
        }
    };

    return (
        <form onSubmit={handleSearch} className={`flex transition-all duration-300 ease-in-out w-72`}>
            <input
                ref={inputRef}
                className={`appearance-none bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out w-full opacity-100`}
                type="text"
                placeholder="게시글 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-l-none transition-all duration-300 ease-in-out rounded-r-full`}
            >
                🔍
            </button>
        </form>
    );
}