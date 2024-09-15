'use client'

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import IntroSection from './IntroSection';
import ContentSection from './ContentSection';
import SearchResults from './SearchResults';
import AppBar from './AppBar';

type Post = {
  thumbnail: any;
  date: string;
  title: string;
  categories: string[];
  id: string;
};

export default function ClientHome({ allPostsData }: { allPostsData: Post[] }) {
  const [showIntro, setShowIntro] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    setShowIntro(!searchParams.get('q'));
  }, [searchParams]);

  return (
    <>
      <AppBar />
      <div className="pt-16"> {/* AppBar의 높이만큼 상단 여백 추가 */}
        {showIntro && <IntroSection />}
        <div className="relative z-10">
          {!showIntro && <SearchResults allPosts={allPostsData} q={searchParams.get('q') || ''} />}
          {showIntro && (
            <>
              <div className="h-screen"></div>
              <ContentSection content={allPostsData.map(post => ({
                ...post,
                category: post.categories[0] || ''
              }))} />
            </>
          )}
        </div>
      </div>
    </>
  );
}