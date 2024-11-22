import React, { useState } from 'react';
import { Bot, Sparkles, MessageSquare, Store, Brain, Globe2, Star, Zap, Clock, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CountdownTimer } from './CountdownTimer';

const socialProof = [
  { metric: '~16%', label: 'Boost In Conversion Rate', icon: TrendingUp },
  { metric: '70%', label: 'Customer Support Automation', icon: MessageSquare },
  { metric: '99.9%', label: 'Uptime', icon: Clock }
];

export function Hero() {
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

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-slate-900">
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Bot Icon */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Bot className="w-16 h-16 text-white/90 animate-pulse" />
            <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Rating Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 animate-pulse hover:bg-white/10 transition-all">
            <div className="flex">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <div className="relative w-4 h-4">
                <Star className="absolute inset-0 w-4 h-4 text-yellow-400/20" />
                <div className="absolute inset-0 overflow-hidden" style={{ width: '90%' }}>
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
            </div>
            <span className="text-white/70 text-sm">Rated 4.9 by happy clients</span>
          </div>
        </div>

        <h1 className="text-center">
          <span className="block text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 animate-gradient leading-tight">
            turn your website visitors
          </span>
          <span className="block text-4xl md:text-5xl font-bold text-white mb-6">
            into paying customers
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-xl md:text-2xl text-white/80 text-center leading-relaxed">
            Your AI-powered web assistant that
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> transforms conversations into conversions</span>
          </p>
          
          {/* Social Proof Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">
            {socialProof.map((item, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl text-white/70 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-white">{item.metric}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center mb-12 max-w-sm mx-auto">
          <Link 
            to="/get-started"
            className="w-full group relative px-10 py-5 bg-blue-500 rounded-2xl text-lg text-white font-medium overflow-hidden transition-all hover:scale-105 hover:bg-blue-600 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 ring-2 ring-blue-400/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 animate-shimmer"></div>
            <span className="relative flex items-center justify-center gap-2">
              Convert More With AI {hasDiscount && <span className="text-blue-100">-20%</span>} <Sparkles className="w-5 h-5" />
            </span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center w-full">
          <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/20 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}