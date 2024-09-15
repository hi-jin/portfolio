import { Post } from '../types/post';
import Link from 'next/link';
import Image from 'next/image';

export default function ContentSection({ content, categories }: { content: Post[], categories: string[] }) {
    return (
        <section className="min-h-screen bg-white dark:bg-gray-900 p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">카테고리</h2>
                <ul className="mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <li key={category} className="mb-2">
                            <Link href={`/category/${category.replace(/ /g, '_')}`} className="text-blue-500 hover:underline block p-4 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                                {category.replace(/_/g, ' ')}
                            </Link>
                        </li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mb-4">최근 게시물</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.map(({ id, date, title, thumbnail }) => (
                        <li key={id} className="border rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:scale-105">
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
            </div>
        </section>
    );
}