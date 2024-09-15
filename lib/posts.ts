import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Post } from '@/app/types/post';

const postsDirectory = path.join(process.cwd(), 'posts');

const DEFAULT_THUMBNAIL = 'https://via.placeholder.com/300x300.png?text=No+Image';

export async function getSortedPostsData(): Promise<Post[]> {
  // 서버 사이드에서만 실행되도록 체크
  if (typeof window === 'undefined') {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        id,
        ...(matterResult.data as { date: string; title: string; categories: string[]; thumbnail: string; category: string }),
        thumbnail: matterResult.data.thumbnail || DEFAULT_THUMBNAIL,
        category: matterResult.data.categories[0] || '',
      };
    });

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  return []; // 클라이언트 사이드에서는 빈 배열 반환
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; categories: string[] }),
  };
}

// 새로운 함수 추가
export function getAllCategories() {
  const fileNames = fs.readdirSync(postsDirectory);
  const categories = new Set<string>();

  fileNames.forEach((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const postCategories = matterResult.data.categories as string[];

    if (postCategories) {
      postCategories.forEach((category) => categories.add(encodeURIComponent(category)));
    }
  });

  return Array.from(categories);
}

// 새로운 함수 추가
export async function getCategoryPosts(encodedCategory: string): Promise<Post[]> {
  const decodedCategory = decodeURIComponent(encodedCategory);
  const allPostsData = await getSortedPostsData();
  return allPostsData.filter((post) => post.categories.includes(decodedCategory));
}