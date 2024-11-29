import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, 
  Sparkles, 
  MessageSquare, 
  Database,
  Globe,
  Check,
  Users,
  BarChart,
  Calendar,
  Layout,
  Palette,
  UserPlus,
  ShoppingCart,
  Zap
} from 'lucide-react';

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
      { text: 'Done-For-You Website Code Installation', icon: Bot },
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
  const navigate = useNavigate();

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

    checkDiscount();
    const intervalId = setInterval(checkDiscount, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  const calculateDiscountedPrice = (price: number): number => {
    return hasDiscount ? Math.floor(price * 0.8) : price;
  };

  return (
    <div id="pricing" className="relative bg-gray-50 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">transparent</span> pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Choose the perfect plan to transform your customer experience
          </p>
          <div className="inline-block px-4 py-2 bg-primary-500/10 rounded-full">
            <p className="text-xl text-primary-600 font-semibold">You only pay for what you need</p>
          </div>
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-gray-600">
              50 free conversations are included per month. For each additional <span className="text-primary-600 font-semibold">10 conversations</span>, 
              <span className="text-primary-600"> $1</span> will be added for the Standard Assistant, 
              <span className="text-primary-600"> $2</span> for the Advanced Assistant, and 
              <span className="text-primary-600"> $3</span> for the Premium Package.
            </p>
          </div>
          {hasDiscount && (
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full text-primary-600 font-semibold">
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
              <div className={`h-full relative bg-white p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 ${
                tier.featured ? 'border-2 border-primary-500/30' : ''
              }`}>
                {tier.featured && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25">
                      <Sparkles className="w-5 h-5" />
                      Best Value
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                )}

                <div className="absolute -inset-px bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                  <p className="text-gray-600 mb-8">{tier.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold text-gray-900">
                        {hasDiscount ? (
                          <>
                            <span className="line-through text-gray-400 text-2xl">${tier.setupFee}</span>
                            {' '}
                            <span className="text-primary-500">${calculateDiscountedPrice(tier.setupFee)}</span>
                          </>
                        ) : (
                          `$${tier.setupFee}`
                        )}
                      </span>
                      <span className="text-gray-600">setup & configuration</span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900">${tier.monthlyPrice}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <feature.icon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleGetStarted}
                    className={`w-full py-4 px-8 rounded-xl font-medium text-center transition-all ${
                      tier.featured
                        ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    id={`pricing-cta-${index}`}
                    data-gtm-category="CTA"
                    data-gtm-action="click"
                    data-gtm-label={`Pricing - ${tier.name}`}
                  >
                    Convert More With AI
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-32">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready for Takeoff? 🚀</h2>
          
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-600 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
            id="pricing-bottom-cta"
            data-gtm-category="CTA"
            data-gtm-action="click"
            data-gtm-label="Pricing Bottom - Convert More With AI"
          >
            I'm ready to start saving time, booking more appointments, selling more products, and making my business more awesome
          </button>
        </div>
      </div>
    </div>
  );
}