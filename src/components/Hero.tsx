import React, { useState } from 'react';
import { Sparkles, MessageSquare, Store, Brain, Globe2, Zap, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CountdownTimer } from './CountdownTimer';
import { RatingBadge } from './RatingBadge';

const socialProof = [
  { metric: '~16%', label: 'Boost In Conversion Rate', icon: TrendingUp },
  { metric: '70%', label: 'Customer Support Automation', icon: MessageSquare },
  { metric: '99.9%', label: 'Uptime', icon: Clock }
];

export function Hero() {
  const navigate = useNavigate();
  const [showDiscount, setShowDiscount] = useState(true);
  const [hasDiscount] = useState(() => {
    const discountTimeLeft = sessionStorage.getItem('discountTimeLeft');
    if (discountTimeLeft) {
      const timeRemaining = parseInt(discountTimeLeft, 10) - Date.now();
      return timeRemaining > 0;
    }
    return true;
  });

  const handleTimerComplete = () => {
    setShowDiscount(false);
  };

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <div 
      className="relative min-h-[90vh] overflow-hidden bg-white"
      id="hero-section"
      data-gtm-category="Hero"
      data-gtm-action="view"
      data-gtm-label="Hero Section"
    >
      {showDiscount && (
        <CountdownTimer 
          initialMinutes={15} 
          onComplete={handleTimerComplete}
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50/20"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="absolute top-1/4 left-1/4 animate-float">
          <MessageSquare className="w-8 h-8 text-primary-400/40" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <Store className="w-8 h-8 text-secondary-400/40" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float">
          <Brain className="w-8 h-8 text-pink-400/40" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex justify-center mb-6">
          <RatingBadge />
        </div>

        <h1 className="text-center">
          <span className="block text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 mb-4 animate-gradient leading-tight">
            turn your website visitors
          </span>
          <span className="block text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            into paying customers
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-xl md:text-2xl text-gray-600 text-center leading-relaxed">
            Your AI-powered web assistant that
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 font-semibold"> transforms conversations into conversions</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">
            {socialProof.map((item, index) => (
              <button 
                key={index}
                className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl text-gray-600 text-sm flex items-center gap-2 hover:bg-white transition-colors border border-gray-200"
                id={`social-proof-button-${index}`}
                data-gtm-category="Hero"
                data-gtm-action="click"
                data-gtm-label={`Social Proof - ${item.label}`}
              >
                <item.icon className="w-4 h-4 text-primary-500" />
                <span className="font-semibold text-gray-900">{item.metric}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center mb-12 max-w-sm mx-auto">
          <button 
            onClick={handleGetStarted}
            className="w-full group relative px-10 py-5 bg-primary-500 rounded-2xl text-lg text-white font-medium overflow-hidden transition-all hover:scale-105 hover:bg-primary-600 shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 ring-2 ring-primary-400/30"
            id="hero-cta-button"
            data-gtm-category="CTA"
            data-gtm-action="click"
            data-gtm-label="Hero - Convert More With AI"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-primary-400/30 to-primary-400/0 animate-shimmer"></div>
            <span className="relative flex items-center justify-center gap-2">
              Convert More With AI {hasDiscount && <span className="text-primary-100">-20%</span>} <Sparkles className="w-5 h-5" />
            </span>
          </button>
        </div>

        <div className="flex justify-center w-full">
          <button 
            className="w-8 h-12 rounded-full border-2 border-gray-300 flex items-start justify-center p-2 hover:border-gray-400 transition-colors"
            id="scroll-indicator-button"
            data-gtm-category="Hero"
            data-gtm-action="click"
            data-gtm-label="Scroll Indicator"
            onClick={() => {
              const featuresSection = document.getElementById('features');
              if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <div className="w-1 h-3 bg-gray-300 rounded-full animate-bounce"></div>
          </button>
        </div>
      </div>
    </div>
  );
}