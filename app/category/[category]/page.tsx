import Link from 'next/link';
import { getAllCategories, getCategoryPosts } from '../../../lib/posts';
import Image from 'next/image';

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category,
  }));
}

export default async function Category({ params }: { params: { category: string } }) {
  const decodedCategory = decodeURIComponent(params.category);
  const categoryPosts = await getCategoryPosts(params.category);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">{decodedCategory} 카테고리의 포스트</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryPosts.map(({ id, date, title, thumbnail }) => (
          <li key={id} className="border rounded-lg overflow-hidden shadow-md">
            <Link href={`/posts/${id}`}>
              <div className="relative w-full h-48">
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-500">{date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}