import { getSortedPostsData, getAllCategories } from '../lib/posts';
import IntroSection from './components/IntroSection';
import ContentSection from './components/ContentSection';

export default async function Home() {
  const allPostsData = await getSortedPostsData();
  const categories = await getAllCategories();

  return (
    <>
      <IntroSection />
      <div className="relative z-10">
        <div className="h-screen"></div> {/* 빈 공간을 만들어 IntroSection과 겹치게 함 */}
        <ContentSection categories={categories} allPostsData={allPostsData} />
      </div>
    </>
  );
}
