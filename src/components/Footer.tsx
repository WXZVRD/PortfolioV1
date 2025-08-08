import { NAV_LINKS } from '@/lib/constants';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-12 border-t border-border/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal animate-pulse-slow"></div>
                <div className="absolute inset-0.5 bg-background rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold gradient-text">&lt;/&gt;</span>
                </div>
              </div>
              <span className="text-lg font-bold">
                <span className="gradient-text">Portfolio</span>
              </span>
            </a>
            
            <p className="text-sm text-foreground/70 mb-4 max-w-xs">
              Bringing your digital ideas to life through creative design and robust development.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              
              <a 
                href="https://linkedin.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              
              <a 
                href="https://twitter.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              
              <a 
                href="mailto:contact@example.com"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "Frontend Design", "Backend Systems", "Full-Stack Solutions", "API Development"].map((service) => (
                <li key={service}>
                  <a 
                    href="#contact"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic space-y-2 text-sm text-foreground/70">
              <p>Kazakhstan, Pavlodar</p>
              <p>
                <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                  forworknickworron@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +7 707 864 10 24
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-border/30">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            &copy; {currentYear} Alex Morgan. All rights reserved.
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Easter egg message for console */}
      <div className="add-console-message hidden">
        {`console.log("%c👋 Hello curious developer!", "font-size: 24px; font-weight: bold; color: #4F46E5;");
console.log("%cLooking for Easter eggs? Try typing 'activateMatrix()' in the console!", "font-size: 16px; color: #059669;");
window.activateMatrix = function() {
  document.body.innerHTML += '<div id="matrix" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;background:rgba(0,0,0,0.9);color:#0F0;overflow:hidden;font-family:monospace;"></div>';
  const matrix = document.getElementById('matrix');
  const text = "FULLSTACK DEVELOPER";
  for(let i = 0; i < 100; i++) {
    setTimeout(() => {
      const span = document.createElement('div');
      span.style.position = 'absolute';
      span.style.left = Math.random() * 100 + 'vw';
      span.style.top = Math.random() * 100 + 'vh';
      span.style.fontSize = Math.random() * 12 + 10 + 'px';
      span.style.opacity = Math.random();
      span.textContent = text[Math.floor(Math.random() * text.length)];
      matrix.appendChild(span);
      
      setTimeout(() => matrix.removeChild(span), 2000);
    }, i * 50);
  }
  
  setTimeout(() => {
    matrix.innerHTML = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;text-align:center;">You found the Easter egg!<br>Thanks for visiting my portfolio.</div>';
    setTimeout(() => document.body.removeChild(matrix), 3000);
  }, 5000);
};`}
      </div>
    </footer>
  );
};