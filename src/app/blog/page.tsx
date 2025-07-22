import { FC } from 'react';
import { Search, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

// Sample blog post data (would typically come from a CMS or API)
const blogPosts = [
  {
    id: '1',
    title: 'The Three Customer Actions Framework: The Simple Path to 8-Figure E-Commerce Success',
    description: 'Discover the deceptively simple framework that separates 8-figure e-commerce brands from the rest. Learn how focusing on just three customer actions can transform your business.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1',
    category: 'e-commerce',
    author: 'AI Team',
    date: 'July 12, 2025',
    readTime: '7 min read'
  },
  {
    id: '2',
    title: 'The Profit Multiplier Strategy: How Retention Triples Your E-Commerce Profit',
    description: 'Discover how the most successful e-commerce brands use retention strategies to triple their profit per customer. Learn the LTV to CAC ratio approach that outperforms ROAS-based methods.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
    category: 'retention',
    author: 'AI Team',
    date: 'July 12, 2025',
    readTime: '9 min read'
  },
  {
    id: '3',
    title: 'The E-Commerce Success Philosophy: 7 Critical Factors That Separate Winners from Losers',
    description: 'Discover the core beliefs and critical success factors that separate 8-figure e-commerce brands from struggling businesses. Learn how to avoid common mistakes and implement winning strategies.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    category: 'e-commerce',
    author: 'AI Team',
    date: 'July 12, 2025',
    readTime: '10 min read'
  },
  {
    id: '4',
    title: 'Predictive Analytics: Forecasting E-commerce Trends with 85% Accuracy',
    description: 'Learn how AI-powered predictive analytics can help your e-commerce business anticipate market shifts and customer behavior with remarkable precision.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    category: 'Predictive Analytics',
    author: 'Data Science Team',
    date: 'July 10, 2025',
    readTime: '8 min read'
  },
  {
    id: '5',
    title: 'Market Intelligence Report: Q3 2025 E-commerce Landscape',
    description: 'Our comprehensive analysis of the latest e-commerce trends, consumer behavior shifts, and competitive intelligence for the third quarter of 2025.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Market Intelligence',
    author: 'Research Team',
    date: 'July 5, 2025',
    readTime: '15 min read'
  },
  {
    id: '6',
    title: 'AI-Driven Product Recommendations: Boosting AOV by 47%',
    description: 'Case study: How implementing advanced AI recommendation engines helped three mid-size retailers dramatically increase their average order value.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Case Studies',
    author: 'Solutions Team',
    date: 'June 28, 2025',
    readTime: '12 min read'
  },
  {
    id: '7',
    title: 'The True Cost of Customer Acquisition in 2025: Industry Benchmarks',
    description: 'A deep dive into current CAC benchmarks across 12 e-commerce verticals, with strategies for reducing acquisition costs through AI optimization.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74',
    category: 'Cost Savings',
    author: 'Analytics Team',
    date: 'June 24, 2025',
    readTime: '11 min read'
  },
  {
    id: '8',
    title: 'Calculating the Real ROI of AI Implementation in Your E-commerce Stack',
    description: 'Beyond the hype: A practical framework for accurately measuring return on investment from AI technologies in your e-commerce operations.',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4',
    category: 'ROI',
    author: 'Finance Team',
    date: 'June 20, 2025',
    readTime: '9 min read'
  },
  {
    id: '9',
    title: 'The Future of E-commerce: 5 AI Trends Reshaping the Industry',
    description: 'From conversational commerce to hyper-personalization, discover the transformative AI trends that forward-thinking e-commerce brands are adopting today.',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a',
    category: 'AI Trends',
    author: 'Innovation Team',
    date: 'June 15, 2025',
    readTime: '10 min read'
  },
  {
    id: '10',
    title: 'Product Strategy Playbook: Using AI to Identify High-Margin Opportunities',
    description: 'Strategic approaches to leverage market intelligence and AI analytics for identifying untapped product opportunities with superior profit margins.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    category: 'Product Strategy',
    author: 'Strategy Team',
    date: 'June 10, 2025',
    readTime: '13 min read'
  },
  {
    id: '11',
    title: 'Cohort Analysis: The Hidden Key to E-commerce Growth',
    description: 'How advanced cohort analysis techniques can reveal critical insights about customer behavior and unlock sustainable growth strategies.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    category: 'Analytics',
    author: 'Data Team',
    date: 'June 5, 2025',
    readTime: '8 min read'
  },
  {
    id: '12',
    title: 'Case Study: How Luxury Brand X Increased Conversion Rate by 139%',
    description: 'A detailed examination of how one luxury e-commerce brand transformed their digital experience with AI-powered personalization.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
    category: 'Case Studies',
    author: 'Success Team',
    date: 'May 30, 2025',
    readTime: '14 min read'
  },
  {
    id: '13',
    title: 'The AI Ethics Playbook for E-commerce Businesses',
    description: 'Navigating the complex ethical considerations of implementing AI in your e-commerce business while building customer trust and compliance.',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1',
    category: 'AI Trends',
    author: 'Ethics Committee',
    date: 'May 25, 2025',
    readTime: '11 min read'
  },
  {
    id: '14',
    title: 'Reducing Operational Costs: AI Automation in E-commerce Logistics',
    description: 'Practical strategies for implementing AI automation in your supply chain and logistics operations to reduce costs and improve efficiency.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088',
    category: 'Cost Savings',
    author: 'Operations Team',
    date: 'May 20, 2025',
    readTime: '9 min read'
  },
  {
    id: '15',
    title: 'Market Intelligence Report: Competitor Pricing Strategies Revealed',
    description: 'An in-depth analysis of pricing strategies used by leading e-commerce players and how to position your offerings competitively.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
    category: 'Market Intelligence',
    author: 'Competitive Analysis Team',
    date: 'May 15, 2025',
    readTime: '12 min read'
  },
  {
    id: '16',
    title: 'Predictive Inventory Management: Reducing Stockouts by 78%',
    description: 'How AI-powered demand forecasting can dramatically reduce stockouts while optimizing inventory levels across your e-commerce business.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c',
    category: 'Predictive Analytics',
    author: 'Supply Chain Team',
    date: 'May 10, 2025',
    readTime: '10 min read'
  },
  {
    id: '17',
    title: 'The Psychological Triggers Behind High-Converting Product Pages',
    description: 'Research-backed insights into the psychological principles that drive conversions, and how to ethically implement them in your e-commerce store.',
    image: 'https://images.unsplash.com/photo-1565398305935-49a3242211c8',
    category: 'Product Strategy',
    author: 'UX Research Team',
    date: 'May 5, 2025',
    readTime: '13 min read'
  },
  {
    id: '18',
    title: 'AI-Powered Fraud Detection: Saving E-commerce Businesses Millions',
    description: 'How the latest AI technologies are helping e-commerce companies detect and prevent fraud more effectively than ever before.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    category: 'AI Trends',
    author: 'Security Team',
    date: 'April 30, 2025',
    readTime: '9 min read'
  },
  {
    id: '19',
    title: 'Attribution Modeling: The Complete Guide for E-commerce Marketers',
    description: 'Untangle the complex customer journey with advanced attribution models that accurately measure the impact of your marketing channels.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
    category: 'Analytics',
    author: 'Marketing Team',
    date: 'April 25, 2025',
    readTime: '14 min read'
  },
  {
    id: '20',
    title: 'Case Study: How Small Business Y Competes with Industry Giants',
    description: 'An inspiring case study of how a small e-commerce business leveraged AI technologies to compete effectively against industry leaders.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
    category: 'Case Studies',
    author: 'Small Business Team',
    date: 'April 20, 2025',
    readTime: '11 min read'
  },
  {
    id: '21',
    title: 'The Hidden Costs of Legacy Systems in E-commerce Operations',
    description: 'A comprehensive analysis of how outdated tech stacks are costing e-commerce businesses, with a roadmap for cost-effective modernization.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    category: 'Cost Savings',
    author: 'Tech Team',
    date: 'April 15, 2025',
    readTime: '10 min read'
  },
  {
    id: '22',
    title: 'Measuring the True ROI of Customer Experience Investments',
    description: 'Beyond immediate conversion: A framework for calculating the long-term ROI of customer experience improvements in your e-commerce business.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
    category: 'ROI',
    author: 'CX Team',
    date: 'April 10, 2025',
    readTime: '12 min read'
  },
  {
    id: '23',
    title: 'AI-Driven Personalization: The Next Frontier in E-commerce Growth',
    description: 'How leading e-commerce brands are using AI to deliver hyper-personalized experiences that drive unprecedented engagement and loyalty.',
    image: 'https://images.unsplash.com/photo-1501159599018-4a0237f65cc8',
    category: 'AI Trends',
    author: 'Personalization Team',
    date: 'April 5, 2025',
    readTime: '8 min read'
  }
];

import { getBlogPosts } from '@/lib/blog';

// Blog categories
const categories = [
  'All Posts',
  'Market Intelligence',
  'E-commerce',
  'AI Trends',
  'Case Studies',
  'Analytics',
  'ROI',
  'Cost Savings',
  'Predictive Analytics',
  'Product Strategy'
];

const BlogPage = async () => {
  const blogPosts = getBlogPosts();
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
          Discover the latest trends, strategies, and innovations for growing your
          e-commerce business with our AI-powered market intelligence.
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
            variant={category === 'All Posts' ? 'default' : 'outline'}
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
                      <span key={tag} className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full">
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
                        alt={post.author || 'Author'}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-xs font-medium text-secondary-foreground">{post.author ? post.author[0] : 'A'}</span>
                      </div>
                    )}
                    <div className="ml-2 flex flex-col">
                      <span className="text-sm font-medium">{post.author}</span>
                      {post.authorTitle && (
                        <span className="text-xs text-muted-foreground">{post.authorTitle}</span>
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
    </div>
  );
};

export default BlogPage;