import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Bot, BarChart, Users, Calendar, MessageSquare, Database, Zap, ShoppingCart, Code, Layout, Palette, History, UserPlus, Globe } from 'lucide-react';

const tiers = [
  {
    name: 'Standard Assistant',
    description: 'Perfect to cover your basics',
    setupFee: 299,
    monthlyPrice: 99,
    featured: false,
    features: [
      { text: 'Lead Capture + Email Notification', icon: Database },
      { text: '24/7 Personalized Customer Support', icon: MessageSquare },
      { text: 'Custom Branding: Agent Launcher & Avatar', icon: Bot },
      { text: 'Done-For-You Website Code Installation', icon: Code },
      { text: 'Support Across 29+ Languages', icon: Globe }
    ]
  },
  {
    name: 'Advanced Assistant',
    description: 'Enhanced features for growing businesses',
    setupFee: 349,
    monthlyPrice: 199,
    featured: false,
    features: [
      { text: 'Everything in Standard', icon: Check },
      { text: 'Branded Login Portal', icon: Users },
      { text: 'Advanced Analytics', icon: BarChart },
      { text: 'Human Handoff', icon: Users },
      { text: 'Past Conversation Reference', icon: MessageSquare },
      { text: 'Appointment Scheduling', icon: Calendar },
      { text: "Fully Customizable Agent Tabs (FAQ's, Calendar Embed, Events, Etc.)", icon: Layout },
      { text: 'Custom Font & Background', icon: Palette },
      { text: 'Conversation Assignment to Team Members', icon: UserPlus },
      { text: 'Lead Database', icon: Database }
    ]
  },
  {
    name: 'Premium Package',
    description: 'Complete solution with ongoing support',
    setupFee: 399,
    monthlyPrice: 299,
    featured: true,
    features: [
      { text: 'Everything in Advanced', icon: Check },
      { text: 'Lead Capture + CRM Integration', icon: Database },
      { text: 'Smart Product Recommendations', icon: ShoppingCart },
      { text: 'Priority Support', icon: Zap },
      { text: 'Monthly Optimizations', icon: BarChart },
      { text: 'Performance Reviews', icon: Users }
    ]
  }
];

export function Pricing() {
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

  const calculateDiscountedPrice = (price: number): number => {
    return hasDiscount ? Math.floor(price * 0.8) : price;
  };

  return (
    <div id="pricing" className="relative bg-slate-900 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">transparent</span> pricing
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-4">
            Choose the perfect plan to transform your customer experience
          </p>
          <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full">
            <p className="text-xl text-blue-400 font-semibold">You only pay for what you need</p>
          </div>
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-white/70">
              50 free conversations are included per month. For each additional <span className="text-blue-400 font-semibold">10 conversations</span>, 
              <span className="text-blue-400"> $1</span> will be added for the Standard Assistant, 
              <span className="text-blue-400"> $2</span> for the Advanced Assistant, and 
              <span className="text-blue-400"> $3</span> for the Premium Package.
            </p>
          </div>
          {hasDiscount && (
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 font-semibold">
                <Sparkles className="w-4 h-4" />
                20% Discount Applied!
                <Sparkles className="w-4 h-4" />
              </span>
            </div>
          )}
        </div>

        <div className="space-y-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative ${tier.featured ? 'mt-12' : ''}`}
              id={`pricing-tier-${index}`}
              data-gtm-category="Pricing"
              data-gtm-action="view"
              data-gtm-label={tier.name}
            >
              <div className={`h-full relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 ${
                tier.featured ? 'border-2 border-blue-500/30' : ''
              }`}>
                {tier.featured && (
                  <div className="absolute -top-4 left-4 z-10">
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-base font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg shadow-blue-500/25">
                      <Sparkles className="w-5 h-5" />
                      Best Value
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                )}

                <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <p className="text-white/70 mb-8">{tier.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold text-white">
                        {hasDiscount ? (
                          <>
                            <span className="line-through text-white/50 text-2xl">${tier.setupFee}</span>
                            {' '}
                            <span className="text-blue-400">${calculateDiscountedPrice(tier.setupFee)}</span>
                          </>
                        ) : (
                          `$${tier.setupFee}`
                        )}
                      </span>
                      <span className="text-white/70">setup & configuration</span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-white">${tier.monthlyPrice}</span>
                      <span className="text-white/70">/month</span>
                    </div>
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
                    id={`pricing-cta-${index}`}
                    data-gtm-category="CTA"
                    data-gtm-action="click"
                    data-gtm-label={`Pricing - ${tier.name}`}
                  >
                    Convert More With AI
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun CTA */}
        <div className="text-center mt-32">
          <h2 className="text-3xl font-bold text-white mb-8">Ready for Takeoff? 🚀</h2>
          
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
            id="pricing-bottom-cta"
            data-gtm-category="CTA"
            data-gtm-action="click"
            data-gtm-label="Pricing Bottom - Convert More With AI"
          >
            I'm ready to start saving time, booking more appointments, selling more products, and making my business more awesome
          </Link>
        </div>
      </div>
    </div>
  );
}