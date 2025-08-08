import { motion } from 'framer-motion';
import HeroBackground from '@/components/HeroBackground';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, ExternalLink } from 'lucide-react';
import { DEVELOPER_NAME, DEVELOPER_ROLE, DEVELOPER_SHORT_BIO } from '@/lib/constants';
import { ScrollReveal } from '@/components/ScrollReveal';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <HeroBackground />
      
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold mb-4">Hello, my name is</p>
            <h1 className="heading-xl mb-4">
              <span className="gradient-text">{DEVELOPER_NAME}</span>
            </h1>
            <h2 className="heading-lg mb-6 text-foreground/80">{DEVELOPER_ROLE}</h2>
            <p className="text-lg md:text-xl mb-8 text-foreground/70 max-w-2xl leading-relaxed">
              {DEVELOPER_SHORT_BIO}
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button asChild size="lg" className="glow-effect">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="glow-effect">
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 hidden md:flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="h-px w-16 bg-foreground/20"></div>
            <a 
              href="#about" 
              className="text-sm text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 group"
            >
              Scroll down
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
        
        <div className="absolute right-10 bottom-10 hidden lg:block">
          <div className="cube-wrapper">
            <div className="cube">
              <div className="cube-face cube-front">React</div>
              <div className="cube-face cube-back">Node.js</div>
              <div className="cube-face cube-right">TypeScript</div>
              <div className="cube-face cube-left">MongoDB</div>
              <div className="cube-face cube-top">Tailwind</div>
              <div className="cube-face cube-bottom">GraphQL</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social links fixed on the left side */}
      <motion.div 
        className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-primary transition-colors"
          aria-label="Github Profile"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-primary transition-colors"
          aria-label="LinkedIn Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-primary transition-colors"
          aria-label="Twitter Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
        </a>
        <a 
          href="mailto:contact@example.com" 
          className="text-foreground/60 hover:text-primary transition-colors"
          aria-label="Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        </a>
        <div className="h-24 w-px bg-foreground/20"></div>
      </motion.div>
      
      {/* Email link fixed on the right side */}
      <motion.div 
        className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a 
          href="mailto:contact@example.com" 
          className="text-foreground/60 hover:text-primary transition-colors origin-bottom-right rotate-90 translate-y-24"
          style={{ textOrientation: 'mixed', writingMode: 'vertical-lr' }}
        >
          contact@example.com
        </a>
        <div className="h-24 w-px bg-foreground/20"></div>
      </motion.div>
    </section>
  );
};