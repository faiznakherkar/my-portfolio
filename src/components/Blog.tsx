
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large React applications with TypeScript, including advanced patterns for state management, component composition, and performance optimization.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "React",
      featured: true,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "AI Integration Patterns for Modern Web Apps",
      excerpt: "Exploring different approaches to integrate AI capabilities into web applications, from simple API calls to complex streaming implementations with real-world examples.",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "AI",
      featured: true,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },
    {
      title: "Microservices Architecture: Lessons Learned",
      excerpt: "Insights from implementing microservices in production environments, including common pitfalls, monitoring strategies, and when to choose monolith vs microservices.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "Architecture",
      featured: false,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    },
    {
      title: "Optimizing Database Performance at Scale",
      excerpt: "Deep dive into database optimization techniques, indexing strategies, and caching patterns that can dramatically improve application performance.",
      date: "Nov 28, 2024",
      readTime: "15 min read",
      category: "Database",
      featured: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "Analyzing emerging trends in web development including WebAssembly, edge computing, and the evolution of JavaScript frameworks in 2024.",
      date: "Nov 20, 2024",
      readTime: "6 min read",
      category: "Trends",
      featured: false,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      title: "Building Secure Authentication Systems",
      excerpt: "Complete guide to implementing secure authentication in modern web applications, covering JWT, OAuth, and best security practices.",
      date: "Nov 15, 2024",
      readTime: "11 min read",
      category: "Security",
      featured: false,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Blog
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Sharing insights, tutorials, and lessons learned from real-world development experiences
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-slate-200">Featured Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">Featured</Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-slate-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-blue-400 hover:text-blue-300 p-0 h-auto font-medium group"
                  >
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-8 text-slate-200">Recent Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card key={index} className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h5 className="font-semibold mb-2 text-slate-100 group-hover:text-blue-400 transition-colors text-sm leading-tight">
                    {post.title}
                  </h5>
                  
                  <p className="text-slate-300 text-xs mb-3 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                      {post.category}
                    </Badge>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-blue-400 hover:text-blue-300 p-0 h-auto text-xs font-medium"
                    >
                      Read →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
