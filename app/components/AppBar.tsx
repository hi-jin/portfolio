'use client'

import Link from 'next/link';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

export default function AppBar() {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
                <div className="px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="text-blue-500 hover:text-blue-700 font-bold text-xl">
                        HOME
                    </Link>
                    <SearchBar />
                </div>
            </div>
            <ThemeToggle />
        </>
    );
}