import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop - navHeight;
      
      // Check if we're on the home page
      if (location.pathname !== '/') {
        // Navigate to home page first, then scroll
        window.location.href = `/#${sectionId}`;
      } else {
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Slate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/why-us" className="text-white/70 hover:text-white transition-colors">
              Why Us
            </Link>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-white/70 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-white/70 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <Link 
              to="/get-started"
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-slate-800 border-t border-white/10"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              Home
            </Link>
            <Link 
              to="/why-us" 
              className="block text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              Why Us
            </Link>
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-white/70 hover:text-white transition-colors"
              role="menuitem"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-white/70 hover:text-white transition-colors"
              role="menuitem"
            >
              Pricing
            </button>
            <Link 
              to="/get-started"
              className="block px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all text-center"
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}