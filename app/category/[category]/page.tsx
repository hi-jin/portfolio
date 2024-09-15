import { Suspense } from 'react';
import { getCategoryPosts, getAllCategories } from '../../../lib/posts';
import ClientCategoryPage from '../../components/ClientCategoryPage';

export async function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((category) => ({
        category: category,
    }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const categoryPosts = await getCategoryPosts(params.category);

    return (
        <Suspense fallback={<div>카테고리 데이터를 로딩 중...</div>}>
            <ClientCategoryPage categoryPosts={categoryPosts} category={params.category} />
        </Suspense>
    );
}