import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getPaginatedBlogPosts } from "@/lib/blog";

// Blog categories
const categories = [
  "All Posts",
  "Market Intelligence",
  "E-commerce",
  "AI Trends",
  "Case Studies",
  "Analytics",
  "ROI",
  "Cost Savings",
  "Predictive Analytics",
  "Product Strategy",
];

const PAGE_SIZE = 12;

// Helper function for condensed pagination
function getPagination(current: number, total: number, delta = 2) {
  const range: (number | string)[] = [];
  const rangeWithDots: (number | string)[] = [];
  let l: number;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  for (let i = 0; i < range.length; i++) {
    if (l) {
      if ((range[i] as number) - l === 2) {
        rangeWithDots.push(l + 1);
      } else if ((range[i] as number) - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(range[i]);
    l = range[i] as number;
  }
  return rangeWithDots;
}

const BlogPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  // Get page from search params, default to 1
  let page = 1;
  const params = await searchParams;
  if (params && params.page) {
    const pageParam = Array.isArray(params.page)
      ? params.page[0]
      : params.page;
    const parsed = parseInt(pageParam, 10);
    if (!isNaN(parsed) && parsed > 0) page = parsed;
  }
  const {
    posts: blogPosts,
    totalPages,
    currentPage,
  } = getPaginatedBlogPosts(page, PAGE_SIZE);

  return (
    <div className=" mx-auto">
      {/* Hero Section */}
      <section className="mb-12 py-16 text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium">
          Our Blog
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI-Powered E-commerce Insights
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Discover the latest trends, strategies, and innovations for growing
          your e-commerce business with our AI-powered market intelligence.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mt-8">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full py-3 pl-10 pr-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </section>

      {/* Categories */}
      <div className="flex gap-2 mb-10 justify-start md:justify-center pb-2 hide-scrollbar">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === "All Posts" ? "default" : "outline"}
            className="rounded-full text-sm whitespace-nowrap"
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <div className="flex flex-col h-full bg-card rounded-lg border border-border overflow-hidden transition-all duration-200 hover:shadow-lg group-hover:border-primary/50">
              {/* Post Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-70 transition-opacity" />
              </div>

              {/* Content */}
              <div className="px-6 pt-6 pb-4 flex flex-col flex-grow">
                {post.category && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-foreground mb-4 w-fit">
                    {post.category}
                  </span>
                )}

                {/* Title */}
                <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {post.description}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Author and Meta */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    {post.authorImage ? (
                      <Image
                        src={post.authorImage}
                        alt={post.author || "Author"}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-xs font-medium text-secondary-foreground">
                          {post.author ? post.author[0] : "A"}
                        </span>
                      </div>
                    )}
                    <div className="ml-2 flex flex-col">
                      <span className="text-sm font-medium">{post.author}</span>
                      {post.authorTitle && (
                        <span className="text-xs text-muted-foreground">
                          {post.authorTitle}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center text-muted-foreground text-sm">
                    <span>{post.date}</span>
                    <Separator orientation="vertical" className="mx-2 h-4" />
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-2">
        {getPagination(currentPage, totalPages).map((p, idx) =>
          p === "..." ? (
            <span key={"ellipsis-" + idx} className="px-3 py-2 text-muted-foreground">...</span>
          ) : (
            <Link
              key={p}
              href={`/blog?page=${p}`}
              className={`px-4 py-2 rounded border text-sm font-medium transition-colors ${
                p === currentPage
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:bg-muted"
              }`}
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default BlogPage;
