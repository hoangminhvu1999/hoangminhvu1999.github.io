"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hoangminhvu1999",
    icon: <Github className="h-4 w-4" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hoangminhvu1999",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/hoangminhvu1999",
    icon: <Twitter className="h-4 w-4" />,
  },
  {
    name: "Email",
    href: "mailto:contact@hoangminhvu.dev",
    icon: <Mail className="h-4 w-4" />,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="font-bold text-lg text-foreground">
              Hoang Minh Vu
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} • All rights reserved
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors hover:bg-secondary text-muted-foreground hover:text-foreground"
                aria-label={link.name}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-6 bg-border/30" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="/resume" className="hover:text-foreground transition-colors">
              Resume
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
          </div>
          <p className="text-xs">Built with Next.js, Tailwind CSS and Shadcn/UI</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
