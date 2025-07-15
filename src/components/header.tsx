"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, Home, Newspaper, Briefcase, FileText, User } from "lucide-react";

const routes = [
  {
    name: "Home",
    path: "/",
    icon: <Home className="h-4 w-4 mr-2" />,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: <Newspaper className="h-4 w-4 mr-2" />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <Briefcase className="h-4 w-4 mr-2" />,
  },
  {
    name: "Resume",
    path: "/resume",
    icon: <FileText className="h-4 w-4 mr-2" />,
  },
  {
    name: "About",
    path: "/about",
    icon: <User className="h-4 w-4 mr-2" />,
  },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    setIsMounted(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 px-4 py-2",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div 
        className={cn(
          "container mx-auto flex h-14 items-center justify-between px-4 transition-all duration-300",
          isScrolled 
            ? "rounded-lg border border-border/50 bg-card/60 backdrop-blur-md shadow-sm" 
            : "rounded-full border border-border/30 bg-card/30 backdrop-blur-sm"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-foreground">Hoang Minh Vu</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => {
            const isActive = 
              route.path === "/"
                ? pathname === "/"
                : pathname.startsWith(route.path);

            return (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1.5",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {route.name}
                {isActive && (
                  <span className="absolute h-0.5 w-full bg-primary left-0 bottom-0" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-border">
              <div className="flex flex-col space-y-4 mt-8">
                {routes.map((route) => {
                  const isActive = 
                    route.path === "/"
                      ? pathname === "/"
                      : pathname.startsWith(route.path);

                  return (
                    <div key={route.path}>
                      <Link
                        href={route.path}
                        className={cn(
                          "flex w-full items-center py-2 text-base font-medium transition-colors",
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {route.icon}
                        {route.name}
                      </Link>
                      <Separator className="my-2 bg-border/50" />
                    </div>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
