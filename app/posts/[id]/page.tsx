import { getPostData, getSortedPostsData } from '../../../lib/posts';

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-8">{postData.date}</div>
      <div 
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        className="markdown-content prose dark:prose-invert max-w-none"
      />
    </div>
  );
}