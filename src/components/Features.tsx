import React from 'react';
import { ShoppingCart, Users, Calendar, MessageSquareMore, Globe, BarChart3, Zap, ArrowRight, Package } from 'lucide-react';

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
    icon: Package,
    title: "Smart Order Tracking",
    description: "Automated order status updates and proactive shipping notifications",
    highlight: "90% fewer tracking inquiries"
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
  }
];

export function Features() {
  return (
    <div id="features" className="relative bg-slate-900 py-32">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group relative bg-white/5 backdrop-blur-xl p-4 md:p-8 rounded-2xl 
                hover:bg-white/10 transition-all duration-300 hover:scale-105
                ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              
              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col items-center text-center">
                <feature.icon className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-blue-400 mt-2">
                  <span>{feature.highlight}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:block">
                <feature.icon className="w-10 h-10 text-blue-400 mb-6 relative" />
                <h3 className="text-xl font-semibold text-white mb-4 relative">{feature.title}</h3>
                <p className="text-white/70 relative mb-6">{feature.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-400 relative">
                  <span>{feature.highlight}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}

          {/* Rich Analytics Feature */}
          <div className="group relative bg-white/5 backdrop-blur-xl p-4 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            
            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center text-center">
              <BarChart3 className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-base font-semibold text-white mb-2">Rich Analytics</h3>
              <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-blue-400 mt-2">
                <span>Real-time insights</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:block text-center">
              <div className="flex justify-center">
                <BarChart3 className="w-10 h-10 text-blue-400 mb-6 relative" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 relative">Rich Analytics</h3>
              <p className="text-white/70 relative mb-6">Deep insights into every customer interaction</p>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-blue-400 relative">
                <span>Real-time insights</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}