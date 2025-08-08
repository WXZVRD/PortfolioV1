import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { DEVELOPER_FULL_BIO } from '@/lib/constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');

  const experiences = [
    {
      company: "GlobalDev Solutions",
      position: "Fullstack Developer (Internship)",
      period: "2024",
      description:
          "Contributed to full-cycle development of internal tools and client-facing applications. Collaborated with international teams, implemented UI features with HTML, CSS, JS, and optimized backend logic for better performance.",
    },
    {
      company: "NextWave Interactive",
      position: "Frontend Developer (Project-based)",
      period: "2023 - 2024",
      description:
          "Created dynamic landing pages and interactive components using vanilla JavaScript and GSAP. Focused on delivering engaging user experiences and maintaining high code quality.",
    },
    {
      company: "Freelance & Personal Projects",
      position: "Web Developer",
      period: "2023",
      description:
          "Developed custom websites and experimental projects, including VR/AR landing pages and gamified learning platforms. Gained practical experience in deployment, responsive design, and performance tuning.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            <div className="md:w-2/5 lg:w-1/3">
              <h2 className="heading-md mb-4">
                <span className="gradient-text">About Me</span>
              </h2>
              
              <div className="relative aspect-square max-w-sm mx-auto md:mx-0 mb-8 md:mb-0">
                <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4 z-0" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-teal/20 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-80 mix-blend-overlay" />
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 lg:w-2/3">
              <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-lg text-foreground/80 mb-6">{DEVELOPER_FULL_BIO}</p>
                    
                    <div className="flex flex-wrap gap-4 items-center">
                      <span className="text-sm font-medium text-foreground/60">My interests:</span>
                      {["Distributed Systems",
                        "Event-Driven Architecture",
                        "Scalable Microservices",
                        "Observability & Monitoring",
                        "Data Streaming Pipelines",
                        "High Availability Systems",
                        "Database Sharding & Replication",
                        "API Gateway Design",
                        "Cloud Infrastructure as Code",
                        "Zero-Downtime Deployments"].map((interest, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="experience">
                  <motion.div 
                    className="flex flex-col gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative pl-6 border-l border-primary/30">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary"></div>
                        <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <span className="text-sm text-foreground/60">{exp.period}</span>
                        </div>
                        <p className="text-foreground/70">{exp.description}</p>
                      </div>
                    ))}
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};