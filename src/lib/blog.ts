import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  authorTitle?: string;
  authorImage?: string;
  image?: string;
  category?: string;
  readTime?: string;
  tags?: string[];
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export function getBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.md'));
  return files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || '',
      authorTitle: data.authorTitle || '',
      authorImage: data.authorImage || '',
      image: data.image || '',
      category: data.category || '',
      readTime: data.readTime || '',
      tags: data.tags || [],
      content,
    };
  });
}

export function getPaginatedBlogPosts(page: number, pageSize: number = 12, search?: string) {
  let allPosts = getBlogPosts();
  
  // Filter posts by search term if provided
  if (search && search.trim()) {
    const searchTerms = search.toLowerCase().trim().split(' ').filter(term => term.length > 0);
    allPosts = allPosts.filter((post) => {
      const searchableText = [
        post.title,
        post.description,
        post.content,
        ...(post.tags || []),
        post.category || '',
        post.author || ''
      ].join(' ').toLowerCase();
      
      // Check if all search terms are found in the searchable text (partial matching)
      return searchTerms.every(term => searchableText.includes(term));
    });
  }
  
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const posts = allPosts.slice(startIdx, endIdx);
  return {
    posts,
    totalPages,
    totalPosts,
    currentPage,
  };
} 