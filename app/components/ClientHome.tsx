'use client'

import { useState, useEffect, Suspense } from 'react';
import IntroSection from './IntroSection';
import ContentSection from './ContentSection';
import SearchResults from './SearchResults';
import { useSearchParams } from 'next/navigation';
import { Post } from '../types/post';

function SearchParamsHandler({ allPostsData, setShowIntro }: { allPostsData: Post[], setShowIntro: (show: boolean) => void }) {
    const searchParams = useSearchParams();
    const q = searchParams.get('q') || '';

    useEffect(() => {
        setShowIntro(!q);
    }, [q, setShowIntro]);

    return q ? <SearchResults allPosts={allPostsData} q={q} /> : null;
}

export default function ClientHome({ allPostsData }: { allPostsData: Post[] }) {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <>
            <div className="pt-16">
                <Suspense fallback={<div>검색 파라미터 로딩 중...</div>}>
                    {showIntro && <IntroSection />}
                    <div className="relative z-10">
                        <SearchParamsHandler allPostsData={allPostsData} setShowIntro={setShowIntro} />
                        {showIntro && (
                            <>
                                <div className="h-screen"></div>
                                <ContentSection content={allPostsData.map(post => ({
                                    ...post,
                                }))} categories={Array.from(new Set(allPostsData.map(post => post.categories).flat()))} />
                            </>
                        )}
                    </div>
                </Suspense>
            </div>
        </>
    );
}