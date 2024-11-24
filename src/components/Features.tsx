import React from 'react';
import { ShoppingCart, Users, Calendar, MessageSquareMore, Globe, BarChart3, Zap, Link, Sparkles } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const features = [
  {
    icon: MessageSquareMore,
    title: "24/7 Customer Support",
    description: "Automate 70%+ of customer support with always-on AI assistance",
    highlight: "Response in < 30 seconds"
  },
  {
    icon: ShoppingCart,
    title: "Smart Product Recommendations",
    description: "AI-powered suggestions that understand your customers' needs",
    highlight: "93% more accurate recommendations"
  },
  {
    icon: Users,
    title: "Intelligent Lead Capture",
    description: "Convert visitors into customers with personalized conversations",
    highlight: "2.4x higher conversion rate"
  },
  {
    icon: Calendar,
    title: "Seamless Scheduling",
    description: "Automated booking that integrates with your calendar",
    highlight: "Save 15+ hours weekly"
  },
  {
    icon: Globe,
    title: "29 Languages",
    description: "Break language barriers and serve customers globally",
    highlight: "98% translation accuracy"
  },
  {
    icon: BarChart3,
    title: "Rich Analytics",
    description: "Deep insights into every customer interaction",
    highlight: "Real-time insights"
  }
];

export function Features() {
  return (
    <div id="features" className="relative bg-slate-900 py-32">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 text-blue-400 mb-4">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your 24/7 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">sales & customer service wingman</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Slate combines AI intelligence with human touch to deliver exceptional customer experiences across all channels.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              id={`feature-${index}`}
              data-gtm-category="Features"
              data-gtm-action="view"
              data-gtm-label={feature.title}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              
              <div className="relative flex items-start gap-6">
                <feature.icon className="w-10 h-10 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 mb-4">{feature.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
                    <span>{feature.highlight}</span>
                    <Link className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <RouterLink
            to="/get-started"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            id="features-cta"
            data-gtm-category="CTA"
            data-gtm-action="click"
            data-gtm-label="Features - Convert More With AI"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 animate-shimmer"></div>
            <span className="relative flex items-center gap-2">
              Convert More With AI <Sparkles className="w-4 h-4" />
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  );
}