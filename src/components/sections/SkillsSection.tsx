import { useEffect, useRef, useState } from 'react';
import { SKILLS } from '@/lib/constants';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A showcase of my technical expertise and tools I use to bring ideas to life.
            </p>
          </div>
        </ScrollReveal>
        
        <div ref={skillsRef}>
          <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
            <ScrollReveal>
              <TabsList className="mx-auto mb-12 grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="devOps">DevOps</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
            </ScrollReveal>
            
            <TabsContent value="frontend">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILLS.frontend.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-foreground/70">{skill.level}%</span>
                    </div>
                    
                    <div className={`skill-progress ${isVisible ? 'active' : ''}`}>
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          transform: isVisible ? `scaleX(${skill.level / 100})` : 'scaleX(0)',
                          transitionDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="backend">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILLS.backend.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-foreground/70">{skill.level}%</span>
                    </div>
                    
                    <div className={`skill-progress ${isVisible ? 'active' : ''}`}>
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          transform: isVisible ? `scaleX(${skill.level / 100})` : 'scaleX(0)',
                          transitionDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="devOps">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILLS.devOps.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-foreground/70">{skill.level}%</span>
                    </div>
                    
                    <div className={`skill-progress ${isVisible ? 'active' : ''}`}>
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          transform: isVisible ? `scaleX(${skill.level / 100})` : 'scaleX(0)',
                          transitionDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="other">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILLS.other.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-foreground/70">{skill.level}%</span>
                    </div>
                    
                    <div className={`skill-progress ${isVisible ? 'active' : ''}`}>
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          transform: isVisible ? `scaleX(${skill.level / 100})` : 'scaleX(0)',
                          transitionDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <ScrollReveal threshold={0.1} delay={300}>
          <div className="mt-20">
            <h3 className="heading-sm mb-6 text-center">Skills Visualization</h3>
            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.entries(SKILLS).flatMap(([category, skills]) =>
                  skills.map((skill) => (
                    <motion.div
                      key={`${category}-${skill.name}`}
                      className="flex flex-col items-center gap-3 p-4 rounded-md hover:bg-muted/50 transition-colors"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                      <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary"
                          style={{ 
                            width: `${skill.level}%`,
                            transition: 'width 1s ease-in-out'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};