import { getSortedPostsData } from '../../lib/posts';
import ClientSearchPage from '../components/ClientSearchPage';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const allPosts = await getSortedPostsData();

  return <ClientSearchPage allPosts={allPosts} searchParams={searchParams} />;
}