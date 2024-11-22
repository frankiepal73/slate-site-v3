import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Menu, X, Sparkles } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasDiscount] = useState(() => {
    const discountTimeLeft = sessionStorage.getItem('discountTimeLeft');
    if (discountTimeLeft) {
      const timeRemaining = parseInt(discountTimeLeft, 10) - Date.now();
      return timeRemaining > 0;
    }
    return false;
  });
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
      
      if (location.pathname !== '/') {
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
            <Link to="/how-this-works" className="text-white/70 hover:text-white transition-colors">
              How It Works
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
            <Link to="/faqs" className="text-white/70 hover:text-white transition-colors">
              FAQs
            </Link>
            <Link 
              to="/get-started"
              className="group relative px-4 py-2.5 bg-blue-500 rounded-xl text-white font-medium overflow-hidden transition-all hover:scale-105 hover:bg-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 ring-2 ring-blue-400/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 animate-shimmer"></div>
              <span className="relative flex items-center gap-2">
                Convert More With AI {hasDiscount && <span className="text-blue-100">-20%</span>} <Sparkles className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-3">
            <Link 
              to="/get-started"
              className="group relative px-3 py-2 bg-blue-500 rounded-xl text-white text-sm font-medium overflow-hidden transition-all hover:scale-105 hover:bg-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 ring-2 ring-blue-400/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 animate-shimmer"></div>
              <span className="relative flex items-center gap-2">
                Convert More With AI {hasDiscount && <span className="text-blue-100">-20%</span>} <Sparkles className="w-3.5 h-3.5" />
              </span>
            </Link>
            <button 
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
            <Link 
              to="/how-this-works" 
              className="block text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              How It Works
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
              to="/faqs" 
              className="block text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              FAQs
            </Link>
            <Link 
              to="/get-started"
              className="block w-full group relative px-4 py-3 bg-blue-500 rounded-xl text-white text-center font-medium overflow-hidden transition-all hover:scale-105 hover:bg-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 ring-2 ring-blue-400/30"
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 animate-shimmer"></div>
              <span className="relative flex items-center justify-center gap-2">
                Convert More With AI {hasDiscount && <span className="text-blue-100">-20%</span>} <Sparkles className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}