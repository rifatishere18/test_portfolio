import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const blogs = [
    {
      title: "Getting Started with React: A Beginner's Guide",
      excerpt: "Learn the fundamentals of React, including components, props, state, and hooks. Perfect for beginners starting their journey in web development.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      category: "React",
      url: "/blogs/getting-started-with-react",
    },
    {
      title: "Advanced TypeScript Patterns",
      excerpt: "Explore advanced TypeScript patterns and best practices that will help you write more maintainable and type-safe code.",
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
      date: "Mar 12, 2024",
      readTime: "8 min read",
      category: "TypeScript",
      url: "/blogs/advanced-typescript-patterns",
    },
    {
      title: "The Future of Web Development",
      excerpt: "Discover upcoming trends and technologies that will shape the future of web development in the next few years.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      category: "Web Dev",
      url: "/blogs/the-future-of-web-development",
    },
  ];

  return (
    <div className="min-h-screen section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden card-hover">
              <div className="aspect-video">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">
                    {blog.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Button as="a" href={blog.url} variant="ghost" className="group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
