import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

// Skeleton components
const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-muted rounded ${className}`} />
);

const BlogLoading = () => {
  return (
    <div className="mx-auto">
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
          <div className="flex gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Search articles..."
                className="w-full py-3 pl-10 pr-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              />
            </div>
            <Button
              size="sm"
              className="px-6 bg-primary text-primary-foreground hover:bg-primary/90"
              disabled
            >
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Modern Categories Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Filter className="h-4 w-4" />
            Filter by category:
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {/* Skeleton category buttons */}
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-20 rounded-full" />
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex flex-col h-full bg-card rounded-lg border border-border overflow-hidden">
            {/* Post Image Skeleton */}
            <div className="relative h-64 overflow-hidden bg-muted">
              <Skeleton className="absolute inset-0" />
            </div>

            {/* Content */}
            <div className="px-6 pt-6 pb-4 flex flex-col flex-grow">
              {/* Category Skeleton */}
              <Skeleton className="w-20 h-6 rounded-full mb-4" />

              {/* Title Skeleton */}
              <div className="space-y-2 mb-3">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>

              {/* Description Skeleton */}
              <div className="space-y-2 mb-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>

              {/* Tags Skeleton */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Skeleton className="w-12 h-5 rounded-full" />
                <Skeleton className="w-16 h-5 rounded-full" />
                <Skeleton className="w-14 h-5 rounded-full" />
              </div>

              {/* Author and Meta Skeleton */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div className="ml-2 flex flex-col">
                    <Skeleton className="w-16 h-4 mb-1" />
                    <Skeleton className="w-12 h-3" />
                  </div>
                </div>

                <div className="flex items-center text-muted-foreground text-sm">
                  <Skeleton className="w-16 h-4" />
                  <Separator orientation="vertical" className="mx-2 h-4" />
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <Skeleton className="w-8 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex justify-center mt-12 gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-10 h-10 rounded" />
        ))}
      </div>
    </div>
  );
};

export default BlogLoading; 