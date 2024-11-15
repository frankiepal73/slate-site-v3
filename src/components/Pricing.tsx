import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Bot, BarChart, Users, Calendar, MessageSquare, Database, Zap, ShoppingCart } from 'lucide-react';

const tiers = [
  {
    name: 'Standard Assistant',
    description: 'Perfect for small businesses with < 100 conversations/month',
    price: '1,250',
    billing: 'one-time build',
    subscription: '20',
    featured: false,
    features: [
      { text: 'Lead Capture + CRM Integration', icon: Database },
      { text: 'Evolving Knowledge Base', icon: Bot },
      { text: '24/7 Customer Service', icon: MessageSquare },
    ],
  },
  {
    name: 'Advanced Assistant',
    description: 'Enhanced features for growing businesses',
    price: '1,450',
    billing: 'one-time build',
    subscription: '149',
    featured: false,
    features: [
      { text: 'Everything in Standard', icon: Check },
      { text: 'Branded Login Portal', icon: Users },
      { text: 'Advanced Analytics', icon: BarChart },
      { text: 'Human Handoff', icon: Users },
      { text: 'Past Conversation Reference', icon: MessageSquare },
      { text: "FAQ Management", icon: Database },
      { text: 'Appointment Scheduling', icon: Calendar },
      { text: 'Smart Product Recommendations', icon: ShoppingCart },
    ],
  },
  {
    name: 'Premium Package',
    description: 'Complete solution with ongoing support',
    price: '2,150',
    billing: 'one-time build',
    subscription: '249',
    featured: true,
    features: [
      { text: 'Everything in Advanced', icon: Check },
      { text: '24/7 Priority Support', icon: Zap },
      { text: 'Monthly Optimizations', icon: BarChart },
      { text: 'Performance Reviews', icon: Users },
    ],
  },
];

export function Pricing() {
  return (
    <div id="pricing" className="relative bg-slate-900 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">transparent</span> pricing
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Choose the perfect plan to transform your customer experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative ${
                tier.featured ? 'md:-mt-12 md:mb-12' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-12 left-0 right-0 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gradient-to-r from-blue-400 to-purple-400 text-white">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`h-full relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 ${
                tier.featured ? 'border border-blue-500/30 scale-105' : ''
              }`}>
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <p className="text-white/70 mb-8">{tier.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">${tier.price}</span>
                      <span className="text-white/70">one-time build</span>
                    </div>
                    {tier.subscription && (
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">${tier.subscription}</span>
                        <span className="text-white/70">/month</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <feature.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-white/90">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/get-started"
                    className={`block w-full py-4 px-8 rounded-xl font-medium text-center transition-all ${
                      tier.featured
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}