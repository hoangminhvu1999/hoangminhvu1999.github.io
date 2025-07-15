# Software Design Specification (SDS)

**Project**: Personal Portfolio with Blog  
**Tech Stack**: Next.js (App Router) + Tailwind CSS + shadcn/ui + Markdown (Contentlayer or MDX)  
**Style Theme**: Modern, minimalist, blue-based color palette

## 1. Overview

A modern personal portfolio site to showcase projects, skills, resume, and blog posts. The blog is a static section rendered from local Markdown files.

The site must be fast, responsive, SEO-friendly, and visually consistent with a blue-based color palette.

## 2. Core Features

### Static Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero section, About, Projects, Contact |
| Projects | `/projects` | Grid of portfolio projects |
| Resume | `/resume` | Work/education timeline |
| Blog (List) | `/blog` | List of blog posts (from .md files) |
| Blog (Detail) | `/blog/[slug]` | Individual post page rendered from Markdown |
| 404 | `/404` | Not found page |

## 3. System Components

### 3.1 Markdown Blog Engine

All blog content stored in `/content/blog/*.md`

Frontmatter fields:

```yaml
title: string
slug: string
summary: string
date: YYYY-MM-DD
tags: string[]
image: string (optional)
```

Rendered using Contentlayer or MDX

### 3.2 Contentlayer Integration

- Auto-generates types from markdown
- Allows static import of blog metadata
- Enables static site generation (SSG)

## 4. Design UI Components

### Hero Section
- Avatar, greeting, subtitle
- CTA buttons (projects, resume)

### About Section
- Avatar + Text + skills badges

### Projects
- Responsive card grid
- Tags, links to GitHub/demo

### Resume
- Timeline using Accordion or timeline layout
- Each item includes role, place, date, description

### Blog List
- BlogCard components:
  - Title, date, summary, tags
  - Clickable card links to full post
- Sort by date descending

### Blog Post Page
- Header: title, date, tags
- Markdown content
- Optional hero image
- Navigation to next/prev posts
- Styled using Tailwind prose (e.g. `prose lg:prose-xl`)

### Contact Section
- Form with name/email/message
- Submit (optional: send to form service or mailto)

## 5. Routing & SEO
- Use Next.js app/ directory for routing
- SEO tags via `<Head>` or with next-seo
- Canonical URLs, OpenGraph metadata per page
- Blog post URLs: `/blog/my-post-slug`

## 6. Color Palette (Blue Theme)

| Element | Color Name | Tailwind Class | Hex |
|---------|------------|---------------|-----|
| Primary | Blue 600 | `bg-blue-600` | #2563EB |
| Primary Light | Blue 500 | `bg-blue-500` | #3B82F6 |
| Accent | Sky 500 | `bg-sky-500` | #0EA5E9 |
| Background | Gray 50 | `bg-gray-50` | #F8FAFC |
| Text Main | Slate 900 | `text-slate-900` | #0F172A |
| Text Muted | Slate 500 | `text-slate-500` | #64748B |

## 7. Development Setup

### Dependencies

```bash
npm install next@latest tailwindcss shadcn/ui contentlayer lucide-react
```

### Tailwind & shadcn Setup
- Add shadcn CLI and generate components as needed
- Use Tailwind prose class for Markdown content

### Markdown Example

```markdown
---
title: "Why I Use Next.js"
slug: "why-nextjs"
date: "2025-07-05"
summary: "My personal experience with building fast sites using Next.js"
tags: ["nextjs", "webdev"]
---

Next.js is awesome because...
```

## 8. Directory Structure

```
/app
  /blog
    /[slug]/page.tsx
    /page.tsx
  /projects
  /resume
  /components
  /layout.tsx

/content
  /blog
    post1.md
    post2.md

/lib
  contentlayer.ts
  utils.ts

/styles
  globals.css

/public
  /images
```