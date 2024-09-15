import { getSortedPostsData } from '../lib/posts';
import IntroSection from './components/IntroSection';
import ContentSection from './components/ContentSection';

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return (
    <>
      <IntroSection />
      <div className="relative z-10">
        <div className="h-screen"></div> {/* 빈 공간을 만들어 IntroSection과 겹치게 함 */}
        <ContentSection content={allPostsData.map(post => ({
          ...post,
          category: post.categories[0] || ''
        }))} />
      </div>
    </>
  );
}
