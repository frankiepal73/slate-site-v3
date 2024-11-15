import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, MessageSquare, Store, Brain, Globe2, ShoppingBag, Database, Users, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CountdownTimer } from './CountdownTimer';

const features = [
  { text: 'Multi-language', icon: Globe2 },
  { text: 'Shopify Ready', icon: ShoppingBag },
  { text: 'CRM Integration', icon: Database },
  { text: 'Human Handoff', icon: Users },
];

const socialProof = [
  { metric: '5.0', label: 'Customer Rating', icon: Star },
  { metric: '100K+', label: 'Conversations Completed' },
  { metric: '99.9%', label: 'Uptime' },
  { metric: '20%', label: 'More Appointments Booked' },
];

export function Hero() {
  const navigate = useNavigate();
  const [showDiscount, setShowDiscount] = useState(true);
  const [hasDiscount, setHasDiscount] = useState(false);

  useEffect(() => {
    const checkDiscount = () => {
      const discountTimeLeft = sessionStorage.getItem('discountTimeLeft');
      if (discountTimeLeft) {
        const timeRemaining = parseInt(discountTimeLeft, 10) - Date.now();
        setHasDiscount(timeRemaining > 0);
      } else {
        setHasDiscount(false);
      }
    };

    // Check initially
    checkDiscount();

    // Set up interval to check regularly
    const intervalId = setInterval(checkDiscount, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTimerComplete = () => {
    setShowDiscount(false);
    sessionStorage.removeItem('discountTimeLeft');
  };

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Show countdown timer if discount is available */}
      {showDiscount && (
        <CountdownTimer 
          initialMinutes={15} 
          onComplete={handleTimerComplete}
        />
      )}
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-gradient"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <MessageSquare className="w-8 h-8 text-blue-400/40" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <Store className="w-8 h-8 text-purple-400/40" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float">
          <Brain className="w-8 h-8 text-pink-400/40" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-64">
        {/* Meet Slate pill */}
        <div className="flex justify-center mb-16">
          <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl text-white/70 text-sm hover:bg-white/10 transition-colors border border-white/10">
            meet slate
          </span>
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative">
            <Bot className="w-24 h-24 text-white/90 animate-pulse" />
            <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-center">
          <span className="block text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 animate-gradient leading-tight">
            turn your website visitors
          </span>
          <span className="block text-6xl md:text-8xl font-bold text-white mb-8">
            into paying customers
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-white/80 text-center leading-relaxed">
            Your AI-powered web assistant that
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> transforms conversations into conversions</span>
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 mb-12">
            {socialProof.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-3xl font-bold text-white">{item.metric}</span>
                  {item.icon && <item.icon className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
                </div>
                <span className="text-sm text-white/70">{item.label}</span>
              </div>
            ))}
          </div>
          
          {/* Key features pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {features.map(({ text, icon: Icon }) => (
              <span 
                key={text} 
                className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl text-white/70 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Icon className="w-4 h-4 text-blue-400" />
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={handleGetStarted}
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl text-white font-medium overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-2">
              Get Started {hasDiscount && <span className="text-blue-400">-10%</span>} <Sparkles className="w-5 h-5" />
            </span>
          </button>
          <Link
            to="/watch-demo"
            className="group px-8 py-4 text-white/90 font-medium hover:text-white transition-colors flex items-center gap-2"
          >
            Watch Demo
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}