import { getPostData, getSortedPostsData } from '../../../lib/posts';
import PostContent from './PostContent';

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
        <div className="text-gray-500 mb-8">{postData.date}</div>
      </div>
      <PostContent contentHtml={postData.contentHtml} />
    </div>
  );
}