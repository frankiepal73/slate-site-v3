import React from 'react';
import { Bot, Package, CreditCard, Code, Rocket, Flag, SmilePlus, CheckCircle2, Sparkles, PartyPopper } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const steps = [
  {
    number: "01",
    icon: Bot,
    title: "Book a Discovery Call",
    description: "Schedule a quick chat to discuss your business needs and how we can help automate your customer service.",
    color: "from-blue-500 to-purple-500"
  },
  {
    number: "02",
    icon: Package,
    title: "Choose Your Package",
    description: "Select the perfect plan for your business size and needs. We'll help you make the right choice.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    icon: Code,
    title: "Check out & onboard",
    description: <span>Complete your purchase and share your business details <span className="text-blue-400">(within 24H)</span></span>,
    color: "from-pink-500 to-red-500"
  },
  {
    number: "04",
    icon: PartyPopper,
    title: "In 7 days",
    description: "Your AI assistant will be ready to transform your customer service.",
    color: "from-blue-500 to-purple-500",
    paths: [
      {
        title: "You test your agent and give the green light, we add your agent to your live site.",
        icon: CheckCircle2
      },
      {
        title: "We work with you for the next week to make any necessary adjustments, and add your agent to your live site.",
        icon: CheckCircle2
      }
    ]
  }
];

export function HowThisWorks() {
  const navigate = useNavigate();
  const handlePathAnimation = (delay: number) => {
    // Animation logic can be added here if needed
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-full mb-6">
            <Bot className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How This <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Works</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Your journey to automated customer service excellence in four simple steps
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative pl-20 ${index === 3 ? 'animate-float' : ''}`}
              >
                {/* Step Number Bubble */}
                <div className={`
                  absolute left-0 flex items-center justify-center w-14 h-14 rounded-full
                  bg-gradient-to-r ${step.color}
                  ${index === 3 ? 'animate-pulse shadow-lg shadow-blue-500/50' : 'animate-pulse'}
                `}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content Card */}
                <div className={`
                  group relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl 
                  hover:bg-white/10 transition-all duration-300
                  ${index === 3 ? 'border-2 border-blue-400/30' : ''}
                `}>
                  <div className={`
                    absolute -inset-px bg-gradient-to-r ${step.color} rounded-2xl
                    opacity-0 group-hover:opacity-100 transition-opacity blur
                  `}></div>

                  <div className="relative">
                    {index === 3 && (
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <div className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white text-sm font-medium flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          Final Step
                          <Sparkles className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                    
                    <h3 className={`text-2xl font-semibold text-white mb-4 ${index === 3 ? 'text-center' : ''}`}>{step.title}</h3>
                    {index !== 3 && <p className="text-white/70 leading-relaxed">{step.description}</p>}

                    {/* Paths under step 4 */}
                    {step.paths && (
                      <div className="relative mt-8">
                        {/* Wireframe connectors - Visible on all screens */}
                        <div className="relative">
                          {/* Vertical line from step 4 */}
                          <div className="absolute left-1/2 -top-2 h-8 w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
                          
                          {/* Horizontal connector - Only on md and up */}
                          <div className="absolute top-6 left-1/4 right-1/4 h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 hidden md:block"></div>
                          
                          {/* Vertical connectors to boxes */}
                          <div className="absolute top-6 left-1/2 md:left-1/4 h-6 w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
                          <div className="absolute top-6 right-1/4 h-6 w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50 hidden md:block"></div>
                        </div>

                        {/* Paths grid */}
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                          {step.paths.map((path, pathIndex) => (
                            <React.Fragment key={pathIndex}>
                              <div className="relative">
                                <div 
                                  className={`
                                    relative bg-gradient-to-br from-green-400/40 to-green-500/40 backdrop-blur-xl p-5 rounded-2xl 
                                    hover:from-green-400/50 hover:to-green-500/50 transition-all duration-300
                                    overflow-hidden group shadow-lg shadow-green-400/30 hover:shadow-green-400/50
                                    border border-green-400/30
                                  `}
                                  onMouseEnter={() => handlePathAnimation(pathIndex * 200)}
                                >
                                  {/* Check Circle Icon */}
                                  <div className="absolute top-4 left-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                  </div>
                                  
                                  {/* Shimmer effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
                                  
                                  {/* Glow effect */}
                                  <div className="absolute -inset-px bg-green-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                                  
                                  <div className="relative flex flex-col items-start gap-2 pt-8">
                                    <p className="text-white/90 text-base md:text-lg font-bold relative z-10">{path.title}</p>
                                    <div className="flex items-center justify-end w-full">
                                      <SmilePlus className="w-5 h-5 text-yellow-400 animate-pulse" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* OR divider - Only show between items on mobile */}
                              {pathIndex === 0 && (
                                <div className="md:hidden flex justify-center -my-4">
                                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium text-sm">
                                    OR
                                  </span>
                                </div>
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        {/* OR divider - Only visible on md and up */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 hidden md:block">
                          <span className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium text-sm">
                            OR
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Description text outside the box for step 4 */}
                {index === 3 && (
                  <div className="text-center mt-8">
                    <p className="text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Welcome pill */}
        <div className="relative flex flex-col items-center mt-32 mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10">
            <span className="text-blue-400 font-medium text-lg">Welcome to the Slate family! 🎉</span>
          </div>
        </div>

        {/* Fun CTA */}
        <div className="text-center">
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