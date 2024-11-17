import React, { useEffect, useRef } from 'react';
import { Bot, Package, CreditCard, Code, Rocket, BookOpen, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'You read about how cool Slate is',
    icon: BookOpen,
    color: 'from-blue-500 to-purple-500',
    completed: true,
    checked: true
  },
  {
    number: '02',
    title: 'Choose Your Package + Provide Some Details about your business',
    icon: Package,
    color: 'from-purple-500 to-pink-500',
    completed: false,
    checked: false
  },
  {
    number: '03',
    title: 'Check out',
    icon: CreditCard,
    color: 'from-pink-500 to-red-500',
    completed: false,
    checked: false
  },
  {
    number: '04',
    title: 'You paste some code on your website (or have us do it) and watch your business convert more leads, build brand trust, schedule appointments with ease, on autopilot.',
    icon: Code,
    color: 'from-red-500 to-orange-500',
    completed: false,
    checked: false
  }
];

export function HowThisWorks() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    document.querySelectorAll('.step-container').forEach((step) => {
      observerRef.current?.observe(step);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-full mb-6">
            <Code className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Success</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            4 simple steps to transform your business
          </p>
        </div>

        {/* Steps Journey */}
        <div className="relative max-w-3xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`
                  step-container relative pl-20 opacity-0 translate-x-8
                  transition-all duration-700 ease-out
                  [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0
                `}
              >
                {/* Step number and icon */}
                <div className="absolute left-0 flex items-center justify-center">
                  <div className={`
                    w-16 h-16 rounded-2xl
                    ${step.checked ? 'bg-green-500' : `bg-gradient-to-r ${step.color}`}
                    flex items-center justify-center
                    transform transition-transform duration-300 hover:scale-110
                  `}>
                    {step.checked ? (
                      <Check className="w-10 h-10 text-white" />
                    ) : (
                      <step.icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`
                  group relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl 
                  hover:bg-white/10 transition-all duration-300 inline-block
                  ${step.checked ? 'border-2 border-green-500' : ''}
                `}>
                  <div className={`
                    absolute -inset-px rounded-2xl
                    opacity-0 group-hover:opacity-100 transition-opacity blur
                    ${step.checked ? 'bg-green-500' : `bg-gradient-to-r ${step.color}`}
                  `}></div>
                  
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white max-w-xl">{step.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun CTA */}
        <div className="text-center mt-32">
          <h2 className="text-3xl font-bold text-white mb-8">Ready for Takeoff? 🚀</h2>
          
          <div className="flex flex-col gap-4">
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
            >
              I'm ready to start saving time, booking more appointments, selling more products, and making my business more awesome
            </Link>
            
            <button 
              className="text-white/50 hover:text-white/70 transition-colors text-sm"
              onClick={() => window.history.back()}
            >
              No, I love doing everything manually and converting less website visitors into money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}