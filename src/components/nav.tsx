import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Nav({ onContactClick }: { onContactClick?: () => void }) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "// HOME" },
    { id: "about", label: "// ABOUT" },
    { id: "experience", label: "// EXPERIENCE" },
    { id: "internships", label: "// INTERNSHIPS" },
    { id: "education", label: "// EDUCATION" },
    { id: "projects", label: "// PROJECTS" },
    { id: "skills", label: "// SKILLS" },
    { id: "contact", label: "// CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-background/80 backdrop-blur-md border-border py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src="/robot-icon.png" alt="Logo" className="w-9 h-9 opacity-80 hover:opacity-100 transition-opacity" />
          <a href="mailto:suryaa29ss@gmail.com" className="hidden sm:block font-mono text-xs text-muted-foreground hover:text-primary transition-colors">suryaa29ss@gmail.com</a>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                if (link.id === "contact" && onContactClick) {
                  onContactClick();
                } else {
                  scrollTo(link.id);
                }
              }}
              className={`font-mono text-xs font-semibold tracking-wider transition-colors ${activeSection === link.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {link.label}
            </button>
          ))}
        </nav>
        
        <button className="md:hidden text-foreground">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </motion.header>
  );
}
