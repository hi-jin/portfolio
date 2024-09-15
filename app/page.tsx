import { getSortedPostsData } from '../lib/posts';
import ClientHome from './components/ClientHome';

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return <ClientHome allPostsData={allPostsData} />;
}
