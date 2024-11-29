import React from 'react';
import { ShoppingCart, Users, Calendar, MessageSquare, Globe, BarChart3, Zap, Link as LinkIcon, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: MessageSquare,
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
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <div id="features" className="relative bg-gray-50 py-32">
      <div className="absolute inset-0 bg-grid-slate bg-[size:60px_60px]"></div>
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 text-primary-500 mb-4">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your 24/7 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">sales & customer service wingman</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Slate combines AI intelligence with human touch to deliver exceptional customer experiences across all channels.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200"
              id={`feature-${index}`}
              data-gtm-category="Features"
              data-gtm-action="view"
              data-gtm-label={feature.title}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              
              <div className="relative flex items-start gap-6">
                <feature.icon className="w-10 h-10 text-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary-500">
                    <span>{feature.highlight}</span>
                    <LinkIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <button
            onClick={handleGetStarted}
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-500 text-white font-medium overflow-hidden transition-all hover:scale-105 hover:bg-primary-600 shadow-xl shadow-primary-500/20 hover:shadow-2xl hover:shadow-primary-500/30"
            id="features-cta"
            data-gtm-category="CTA"
            data-gtm-action="click"
            data-gtm-label="Features - Convert More With AI"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-primary-400/30 to-primary-400/0 animate-shimmer"></div>
            <span className="relative flex items-center gap-2">
              Convert More With AI <Sparkles className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}