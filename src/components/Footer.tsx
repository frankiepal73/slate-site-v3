import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Facebook, Linkedin, Mail, Instagram } from 'lucide-react';

// Custom X (Twitter) icon component to match Lucide style
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -9.233" />
    <path d="M13.277 12.454l6.723 -8.454" />
  </svg>
);

export function Footer() {
  const location = useLocation();

  const handleScroll = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // If we're already on the home page, just scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80; // Height of your navigation bar
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  const links = {
    product: [
      { name: 'Features', href: 'features', isSection: true },
      { name: 'Pricing', href: 'pricing', isSection: true },
      { name: 'Why Us', href: '/why-us', isSection: false },
      { name: 'Watch Demo', href: '/watch-demo', isSection: false },
      { name: 'Get Started', href: '/get-started', isSection: false }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Data Deletion Request', href: '/data-deletion' }
    ],
    social: [
      { name: 'X', href: 'https://x.com/slateautomation', icon: XIcon },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/slate-digital-media-group/', icon: Linkedin },
      { name: 'Facebook', href: 'https://www.secure.facebook.com/profile.php?id=61567039297157', icon: Facebook },
      { name: 'Instagram', href: 'https://www.instagram.com/chatwithslate/', icon: Instagram },
      { name: 'Email', href: 'mailto:frank@slatedigitalmedia.com', icon: Mail }
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Bot className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Slate</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Transform your customer interactions with AI-powered brilliance. 
              Available 24/7, fluent in 100+ languages, and always learning.
            </p>
            <div className="flex gap-4">
              {links.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/50 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((item) => (
                <li key={item.name}>
                  {item.isSection ? (
                    <button
                      onClick={() => handleScroll(item.href)}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}