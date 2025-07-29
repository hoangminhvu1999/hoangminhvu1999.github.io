import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Search, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getPaginatedBlogPosts, getBlogCategories } from "@/lib/blog";
import { Input } from "@/components/ui/input";

const PAGE_SIZE = 12;

// Helper function for condensed pagination
function getPagination(current: number, total: number, delta = 2) {
  const range: (number | string)[] = [];
  const rangeWithDots: (number | string)[] = [];
  let l: number | undefined;

  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= current - delta && i <= current + delta)
    ) {
      range.push(i);
    }
  }

  for (let i = 0; i < range.length; i++) {
    if (l) {
      if ((range[i] as number) - l === 2) {
        rangeWithDots.push(l + 1);
      } else if ((range[i] as number) - l !== 1) {
        rangeWithDots.push("...");
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
  // Get page, search, and category from search params, default to 1, empty, and empty
  let page = 1;
  let search = "";
  let category = "";
  const params = await searchParams;
  if (params) {
    if (params.page) {
      const pageParam = Array.isArray(params.page) ? params.page[0] : params.page;
      const parsed = parseInt(pageParam, 10);
      if (!isNaN(parsed) && parsed > 0) page = parsed;
    }
    if (params.search) {
      search = Array.isArray(params.search) ? params.search[0] : params.search;
    }
    if (params.category) {
      category = Array.isArray(params.category) ? params.category[0] : params.category;
    }
  }
  
  const {
    posts: blogPosts,
    totalPages,
    currentPage,
    totalPosts,
  } = getPaginatedBlogPosts(page, PAGE_SIZE, search, category);

  // Get categories from the blog posts
  const categories = getBlogCategories();
  const allCategories = ["All Posts", ...categories];

  return (
    <div className=" mx-auto">
      {/* Hero Section */}
      <section className="mb-12 py-16 text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-primary text-primary-foreground text-sm font-medium">
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
          <form action="/blog" method="GET" className="flex gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input
                type="text"
                name="search"
                placeholder="Search articles..."
                defaultValue={search}
                className="w-full py-3 pl-10 pr-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Search
            </Button>
          </form>
        </div>
        
        {/* Search Results Info */}
        {search && (
          <div className="mt-4 text-sm text-muted-foreground">
            Found {totalPosts} result{totalPosts !== 1 ? 's' : ''} for {`"${search}"`}
          </div>
        )}
      </section>

      {/* Modern Categories Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Filter className="h-4 w-4" />
            Filter by category:
          </div>
          {category && (
            <Link href="/blog">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs"
              >
                Clear filter
              </Button>
            </Link>
          )}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {allCategories.map((cat) => {
            const isActive = cat === "All Posts" ? !category : cat === category;
            const href = cat === "All Posts" 
              ? `/blog${search ? `?search=${encodeURIComponent(search)}` : ''}`
              : `/blog?category=${encodeURIComponent(cat)}${search ? `&search=${encodeURIComponent(search)}` : ''}`;
            
            return (
              <Link key={cat} href={href}>
                <Button
                  variant={isActive ? "default" : "outline"}
                  className={`rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-md hover:shadow-lg" 
                      : "hover:bg-muted/50 border-border hover:border-primary/30"
                  }`}
                  size="sm"
                >
                  {cat}
                  {isActive && (
                    <div className="ml-2 w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse" />
                  )}
                </Button>
              </Link>
            );
          })}
        </div>
        
        {/* Active filter indicator */}
        {category && (
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Showing posts in: <span className="font-medium text-foreground">{category}</span></span>
          </div>
        )}
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

      {/* No Results Message */}
      {blogPosts.length === 0 && search && (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center">
                <Search className="h-10 w-10 text-muted-foreground/60" />
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 text-foreground">
              No articles found
            </h3>
            
            {/* Description */}
            <p className="text-muted-foreground text-lg mb-6">
              We couldn't find any articles matching <span className="font-medium text-foreground">"{search}"</span>
            </p>
            
            {/* Suggestions */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h4 className="font-medium mb-3 text-foreground">Try these suggestions:</h4>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Check your spelling
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Use more general keywords
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Try different search terms
                </li>
              </ul>
            </div>
            
            {/* Action Button */}
            <Link href="/blog">
              <Button 
                variant="outline" 
                className="gap-2"
              >
                <Search className="h-4 w-4" />
                Browse all articles
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2">
          {getPagination(currentPage, totalPages).map((p, idx) =>
            p === "..." ? (
              <span
                key={"ellipsis-" + idx}
                className="px-3 py-2 text-muted-foreground"
              >
                ...
              </span>
            ) : (
              <Link
                key={p}
                href={`/blog?page=${p}${search ? `&search=${encodeURIComponent(search)}` : ''}${category ? `&category=${encodeURIComponent(category)}` : ''}`}
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
      )}
    </div>
  );
};

export default BlogPage;
