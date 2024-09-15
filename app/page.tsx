import { Suspense } from 'react';
import { getSortedPostsData } from '../lib/posts';
import ClientHome from './components/ClientHome';

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <ClientHome allPostsData={allPostsData} />
    </Suspense>
  );
}
