import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal animate-pulse-slow"></div>
            <div className="absolute inset-0.5 bg-background rounded-full flex items-center justify-center">
              <span className="text-lg font-bold gradient-text">&lt;/&gt;</span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">WXZVRD portfolio</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.path}
              className="text-foreground/80 hover:text-primary transition-colors relative group text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container-custom flex flex-col py-4 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-foreground/80 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};