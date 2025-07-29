import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Helper function to get post data
async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return notFound();
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    frontmatter: data,
    content: contentHtml,
  };
}

// Generate static paths for all posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = await getPost(slug);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </Button>
        </div>

        <article>
          <Card className="mb-8">
            <CardHeader>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{post.frontmatter.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{post.frontmatter.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={post.frontmatter.authorImage} alt={post.frontmatter.author} />
                    <AvatarFallback>{post.frontmatter.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{post.frontmatter.author}</p>
                    <p className="text-sm text-muted-foreground">{post.frontmatter.authorTitle}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{post.frontmatter.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{post.frontmatter.readTime}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {post.frontmatter.image && (
            <div className="mb-8 relative aspect-video rounded-lg overflow-hidden">
               <Image 
                src={post.frontmatter.image} 
                alt={post.frontmatter.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex items-center space-x-2 mb-8">
            {post.frontmatter.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Card>
            <CardContent className="prose prose-invert max-w-none prose-h2:text-3xl prose-h2:font-bold prose-p:text-lg prose-a:text-primary hover:prose-a:text-primary/80 pt-6">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
}
