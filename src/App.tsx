import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/hooks/use-theme';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

// Main Portfolio page component
const Portfolio = () => {
  // Add Easter egg to console
  useEffect(() => {
    console.log(
      "%c👋 Welcome to my portfolio!", 
      "font-size: 24px; font-weight: bold; color: #3B82F6;"
    );
    console.log(
      "%cFeel free to explore the code. Try typing 'activateMatrix()' for a surprise!", 
      "font-size: 14px; color: #10B981;"
    );
    
    // Create matrix function
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
          span.style.opacity = Math.random().toString();
          span.textContent = text[Math.floor(Math.random() * text.length)];
          matrix!.appendChild(span);
          
          setTimeout(() => matrix!.removeChild(span), 2000);
        }, i * 50);
      }
      
      setTimeout(() => {
        matrix!.innerHTML = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;text-align:center;">You found the Easter egg!<br>Thanks for visiting my portfolio.</div>';
        setTimeout(() => document.body.removeChild(matrix!), 3000);
      }, 5000);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;