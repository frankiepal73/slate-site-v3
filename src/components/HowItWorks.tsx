import React from 'react';
import { Bot, Package, Code, PartyPopper, Flag, SmilePlus, CheckCircle2, Sparkles, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: "01",
    icon: Book,
    title: "Read About How Cool Slate Is",
    description: "Learn about our powerful AI assistant and how it sells products, captures leads, schedules appointments, and handles customer service for you 24/7.",
    color: "from-blue-500 to-purple-500",
    isCompleted: true
  },
  {
    number: "02",
    icon: Package,
    title: "Choose Your Package",
    description: "Select the perfect agent for your business size and needs.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    icon: Code,
    title: "Onboard",
    description: "Collaborate with our design team to bring your ideal AI agent to life. We'll customize your chatbot's personality and capabilities to perfectly represent your unique brand. Then, we'll dive into building your tailored solution.",
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

export function HowItWorks() {
  return (
    <div id="how-it-works" className="relative bg-slate-900 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent)]"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-full mb-6">
            <Bot className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How This <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Works</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Start selling more & messaging less in four simple steps:
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
                  ${step.isCompleted 
                    ? 'bg-green-500/20 border border-green-500' 
                    : `bg-gradient-to-r ${step.color}`}
                  ${index === 3 ? 'animate-pulse shadow-lg shadow-blue-500/50' : 'animate-pulse'}
                `}>
                  {step.isCompleted ? (
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  ) : (
                    <step.icon className="w-6 h-6 text-white" />
                  )}
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
                                    relative bg-gradient-to-br from-green-600/40 to-green-700/40 backdrop-blur-xl p-5 rounded-2xl 
                                    hover:from-green-600/50 hover:to-green-700/50 transition-all duration-300
                                    overflow-hidden group shadow-lg shadow-green-600/30 hover:shadow-green-600/50
                                    border border-green-600/30
                                  `}
                                >
                                  {/* Check Circle Icon */}
                                  <div className="absolute top-4 left-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                  </div>
                                  
                                  {/* Shimmer effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
                                  
                                  {/* Glow effect */}
                                  <div className="absolute -inset-px bg-green-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                                  
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

        {/* CTA Section */}
        <div className="text-center mt-32">
          <h2 className="text-3xl font-bold text-white mb-8">Ready for Takeoff? 🚀</h2>
          
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
          >
            I'm ready to start saving time, booking more appointments, selling more products, and making my business more awesome
          </Link>
        </div>
      </div>
    </div>
  );
}