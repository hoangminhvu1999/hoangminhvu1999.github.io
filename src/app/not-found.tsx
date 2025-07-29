import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, FileText, User } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Quick Navigation */}
        <Card className="mb-8 max-w-md mx-auto">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 text-foreground">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/">
                <Button variant="outline" className="w-full h-12 gap-2">
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="w-full h-12 gap-2">
                  <Search className="h-4 w-4" />
                  Blog
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="w-full h-12 gap-2">
                  <FileText className="h-4 w-4" />
                  Projects
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="w-full h-12 gap-2">
                  <User className="h-4 w-4" />
                  About
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
} 