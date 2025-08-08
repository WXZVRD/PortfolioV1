import { useState } from 'react';
import { PROJECTS } from '@/lib/constants';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(
      PROJECTS.flatMap((project) => project.tags)
    )
  );
  
  // Filter projects based on selected tag
  const filteredProjects = filter
    ? PROJECTS.filter((project) => project.tags.includes(filter))
    : PROJECTS;
  
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore my latest work. Each project represents my passion for creating 
              engaging, user-friendly applications with clean code.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal threshold={0.2} delay={200}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Button
              variant={filter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(null)}
              className="rounded-full"
            >
              All
            </Button>
            
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>
        </ScrollReveal>
        
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`project-card group bg-card rounded-lg overflow-hidden shadow-lg border border-border/50 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-image-container h-48 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button asChild size="icon" variant="outline" className="rounded-full bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View source code">
                        <Github size={20} />
                      </a>
                    </Button>
                    <Button asChild size="icon" variant="outline" className="rounded-full bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Visit live site">
                        <ExternalLink size={20} />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="heading-sm mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="bg-primary/5 text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} /> Source
                      </a>
                    </Button>
                    <Button asChild variant="default" size="sm" className="gap-2">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <ScrollReveal threshold={0.1} delay={400}>
          <div className="mt-16 text-center">
            <p className="text-foreground/70 mb-4">
              Interested in seeing more of my work?
            </p>
            <Button asChild variant="outline" className="gap-2 glow-effect">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={18} /> Visit my GitHub
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};