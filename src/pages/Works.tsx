
import { Github, Globe, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Works = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React and Node.js. Features include user authentication, product management, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered features. Implements WebSocket for live messaging and OpenAI's GPT for smart responses.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a",
      technologies: ["React", "Socket.io", "OpenAI", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with React and Tailwind CSS. Features smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden card-hover">
              <div className="aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button size="sm" className="group">
                    <Globe className="w-4 h-4 mr-2" />
                    Live Demo
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
