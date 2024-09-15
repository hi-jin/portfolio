'use client'

import Link from 'next/link';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function AppBarContent() {
    const [isVisible, setIsVisible] = useState(false);
    const searchParams = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100 || searchParams.get('q') || pathname !== '/') {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        handleScroll(); // 초기 상태 설정
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [searchParams, pathname]);

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-transform duration-300 ${isVisible || searchParams.get('q') ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="text-blue-500 hover:text-blue-700 font-bold text-xl" onClick={() => setIsVisible(false)}>
                        HOME
                    </Link>
                    <SearchBar />
                </div>
            </div>
            <ThemeToggle />
        </>
    );
}

export default function AppBar() {
    return (
        <Suspense fallback={<div>로딩 중...</div>}>
            <AppBarContent />
        </Suspense>
    );
}