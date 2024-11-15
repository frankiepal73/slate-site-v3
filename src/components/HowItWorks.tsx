import React from 'react';
import { Zap, Rocket, BarChart, DollarSign } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Zap,
    title: "Lightning-Fast Setup",
    description: "We handle everything in under a week. Your AI assistant learns your business, connects to your tools, and starts delivering value immediately.",
    highlight: "Setup in < 7 days"
  },
  {
    number: "02",
    icon: Rocket,
    title: "Capture & Convert",
    description: "Watch your conversion rates soar as our AI engages visitors 24/7, providing instant, personalized responses that drive sales.",
    highlight: "24/7 Engagement"
  },
  {
    number: "03",
    icon: BarChart,
    title: "Optimize & Scale",
    description: "Use AI-driven insights to refine your approach and scale your business with data-backed decisions.",
    highlight: "Real-time optimization"
  },
  {
    number: "04",
    icon: DollarSign,
    title: "Maximize ROI",
    description: "See immediate impact with increased sales, reduced support costs, and improved customer lifetime value.",
    highlight: "3x ROI guaranteed"
  }
];

export function HowItWorks() {
  return (
    <div className="relative bg-slate-900 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent)]"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
          How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Works</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
          
          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative pl-20 animate-on-scroll"
              >
                {/* Number bubble */}
                <div className="absolute left-0 flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 border border-blue-500/30 group-hover:border-blue-500 transition-colors">
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {step.number}
                  </span>
                </div>
                
                <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  <div className="relative flex items-start gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/70 mb-4">{step.description}</p>
                      <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                        {step.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}