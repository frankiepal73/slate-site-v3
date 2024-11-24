import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bot, Menu, X, Sparkles } from 'lucide-react';

export function Navigation() {
  const navigate = useNavigate();
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

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

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
      id="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center gap-2"
            id="nav-logo"
            data-gtm-category="Navigation"
            data-gtm-action="click"
            data-gtm-label="Logo"
          >
            <Bot className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Slate</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-white/70 hover:text-white transition-colors"
              id="nav-home"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="Home"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/why-us')}
              className="text-white/70 hover:text-white transition-colors"
              id="nav-why-us"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="Why Us"
            >
              Why Us
            </button>
            <button 
              onClick={() => handleNavigation('/how-this-works')}
              className="text-white/70 hover:text-white transition-colors"
              id="nav-how-it-works"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="How It Works"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white/70 hover:text-white transition-colors"
              id="nav-features"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="Features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-white/70 hover:text-white transition-colors"
              id="nav-pricing"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="Pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavigation('/faqs')}
              className="text-white/70 hover:text-white transition-colors"
              id="nav-faqs"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="FAQs"
            >
              FAQs
            </button>
            <button 
              onClick={() => handleNavigation('/get-started')}
              className="group relative px-4 py-2.5 bg-blue-500 rounded-xl text-white font-medium overflow-hidden transition-all hover:scale-105 hover:bg-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 ring-2 ring-blue-400/30"
              id="nav-cta-desktop"
              data-gtm-category="CTA"
              data-gtm-action="click"
              data-gtm-label="Desktop Nav - Convert More With AI"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 animate-shimmer"></div>
              <span className="relative flex items-center gap-2">
                Convert More With AI {hasDiscount && <span className="text-blue-100">-20%</span>} <Sparkles className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="lg:hidden flex items-center gap-3">
            <button 
              onClick={() => handleNavigation('/get-started')}
              className="group relative px-3 py-2 bg-blue-500 rounded-xl text-white text-sm font-medium overflow-hidden transition-all hover:scale-105 hover:bg-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 ring-2 ring-blue-400/30"
              id="nav-cta-mobile"
              data-gtm-category="CTA"
              data-gtm-action="click"
              data-gtm-label="Mobile Nav - Convert More With AI"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 animate-shimmer"></div>
              <span className="relative flex items-center gap-2">
                Convert More With AI {hasDiscount && <span className="text-blue-100">-20%</span>} <Sparkles className="w-3.5 h-3.5" />
              </span>
            </button>
            <button 
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="Mobile Menu Toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden bg-slate-800 border-t border-white/10"
          role="menu"
          aria-orientation="vertical"
          id="mobile-menu"
        >
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => handleNavigation('/')}
              className="block w-full text-left text-white/70 hover:text-white transition-colors"
              role="menuitem"
              id="mobile-nav-home"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="Mobile - Home"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/why-us')}
              className="block w-full text-left text-white/70 hover:text-white transition-colors"
              role="menuitem"
              id="mobile-nav-why-us"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="Mobile - Why Us"
            >
              Why Us
            </button>
            <button 
              onClick={() => handleNavigation('/how-this-works')}
              className="block w-full text-left text-white/70 hover:text-white transition-colors"
              role="menuitem"
              id="mobile-nav-how-it-works"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="Mobile - How It Works"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-white/70 hover:text-white transition-colors"
              role="menuitem"
              id="mobile-nav-features"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="Mobile - Features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-white/70 hover:text-white transition-colors"
              role="menuitem"
              id="mobile-nav-pricing"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="Mobile - Pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavigation('/faqs')}
              className="block w-full text-left text-white/70 hover:text-white transition-colors"
              role="menuitem"
              id="mobile-nav-faqs"
              data-gtm-category="Navigation"
              data-gtm-action="click"
              data-gtm-label="Mobile - FAQs"
            >
              FAQs
            </button>
            <div className="pt-2">
              <button 
                onClick={() => handleNavigation('/get-started')}
                className="block w-full group relative px-4 py-3 bg-blue-500 rounded-xl text-white text-center font-medium overflow-hidden transition-all hover:scale-105 hover:bg-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 ring-2 ring-blue-400/30"
                role="menuitem"
                id="mobile-nav-cta"
                data-gtm-category="CTA"
                data-gtm-action="click"
                data-gtm-label="Mobile Menu - Convert More With AI"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 animate-shimmer"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Convert More With AI {hasDiscount && <span className="text-blue-100">-20%</span>} <Sparkles className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}