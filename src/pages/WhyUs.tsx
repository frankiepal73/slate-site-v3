import React, { useEffect, useRef } from 'react';
import { Bot, Brain, Globe2, Search, Sparkles, MessageSquare, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    icon: Bot,
    title: "Capture the Curiosity",
    description: "The instant a potential customer reaches out, Slate's AI leaps into action. With the precision of a master detective, it deftly captures every inquiry, ensuring no lead is left behind. It's not just customer service - it's an art form.",
    color: "from-blue-500 to-purple-500",
    conversation: [
      { type: 'user', message: "Hey, do you offer custom solutions?" },
      { type: 'bot', message: "Hi there! 👋 Absolutely! We specialize in tailoring our AI solutions to your specific needs. Could you tell me a bit about your business?" },
      { type: 'user', message: "I run an e-commerce store with about 5000 monthly visitors" },
      { type: 'bot', message: "Perfect! With that traffic, our AI could help automate customer support and boost sales. Would you like to see how?" }
    ]
  },
  {
    icon: Brain,
    title: "Unravel the Unknown",
    description: "Slate's advanced NLU doesn't just listen to what users say - it discerns what they mean. By swiftly decoding intent, it gets to the heart of each query, transforming puzzlement into purpose. It's like having a psychic on your sales force.",
    color: "from-purple-500 to-pink-500",
    conversation: [
      { type: 'user', message: "ugh my shipping is taking forever 😤" },
      { type: 'bot', message: "I understand your frustration with the delivery delay. Let me check your order status right away." },
      { type: 'bot', message: "I see your order #12345 shipped 2 days ago and is currently in transit. Would you like me to set up notifications for updates?" }
    ]
  },
  {
    icon: Globe2,
    title: "Bridge the Babel",
    description: "With fluency in over 100 languages, Slate is the ultimate polyglot. It not only detects the user's dialect but also optimizes their query to ensure crystal-clear communication. Slate breaks down language barriers and builds up understanding.",
    color: "from-pink-500 to-red-500",
    conversation: [
      { type: 'user', message: "¿Tienen envíos internacionales?" },
      { type: 'bot', message: "¡Sí! Realizamos envíos a todo el mundo 🌎" },
      { type: 'user', message: "Parfait! Et les frais d'expédition?" },
      { type: 'bot', message: "Les frais d'expédition sont calculés en fonction de votre localisation. Je peux vous faire un devis personnalisé! 📦" }
    ]
  },
  {
    icon: Search,
    title: "Mine the Motherlode",
    description: "This is where Slate truly dazzles. It delves deep into your website, product pages, and the rich lode of intel from onboarding to unearth the perfect gem of information. No query is too complex, no data too dense for Slate's AI to excavate the exact insights needed.",
    color: "from-red-500 to-orange-500",
    conversation: [
      { type: 'user', message: "What's the difference between your Premium and Enterprise plans?" },
      { type: 'bot', message: "Let me break that down for you! 🔍" },
      { type: 'bot', message: "Premium includes advanced analytics and 24/7 support, while Enterprise adds custom integrations, dedicated account management, and unlimited API calls. Based on your earlier mention of 5000 monthly visitors, I'd actually recommend our Premium plan." }
    ]
  },
  {
    icon: Sparkles,
    title: "Craft the Customized",
    description: "Slate goes beyond mere information retrieval. It weaves a tailored tapestry of responses, intertwining user details and conversation history to create an experience that's not just personalized, but truly one-of-a-kind. It's bespoke service at bot speed.",
    color: "from-orange-500 to-yellow-500",
    conversation: [
      { type: 'user', message: "Looking for a new laptop for video editing" },
      { type: 'bot', message: "Based on your previous purchases and editing software preferences, I'd recommend our ProBook X15. It comes with 32GB RAM and a dedicated GPU - perfect for your Adobe Premiere projects! Would you like to see some rendering benchmarks?" },
      { type: 'user', message: "Yes please!" }
    ]
  },
  {
    icon: MessageSquare,
    title: "Serve with Style",
    description: "With the perfect response composed, Slate translates it into the user's native tongue with the panache of a poet. The result is a conversation so smooth, so seamless, the user forgets they're talking to a bot. That's the magic of Slate's multilingual finesse.",
    color: "from-yellow-500 to-green-500",
    conversation: [
      { type: 'user', message: "Can you help me track my order?" },
      { type: 'bot', message: "Of course! I see you ordered our bestselling wireless earbuds 🎧" },
      { type: 'bot', message: "Good news! Your package is out for delivery today. Based on current routes, it should arrive between 2-4 PM. Would you like me to send you a notification when it's 30 minutes away?" }
    ]
  },
  {
    icon: TrendingUp,
    title: "Savor the Success",
    description: "As the interaction concludes and the customer converts, Slate takes a moment to revel in the win. But the real triumph is the impact on your bottom line - more sales, more satisfied customers, more time for your team to focus on what matters. That's the power of Slate.",
    color: "from-green-500 to-blue-500",
    conversation: [
      { type: 'user', message: "Thanks for all your help today!" },
      { type: 'bot', message: "It was my pleasure! 🌟 Your order is confirmed and you'll receive tracking details shortly. Is there anything else you need?" },
      { type: 'user', message: "Nope, all good! This was super helpful" },
      { type: 'bot', message: "Wonderful! Don't hesitate to reach out if you need anything. Enjoy your new purchase! 🎉" }
    ]
  }
];

export function WhyUs() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const navigate = useNavigate();

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

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-full mb-6">
            <Bot className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Slate</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Take a journey through our sophisticated AI process that turns curious visitors into delighted customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>

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
                <div className={`
                  absolute left-0 flex items-center justify-center w-14 h-14 rounded-full
                  bg-gradient-to-r ${step.color}
                  animate-pulse
                `}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                <div className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className={`
                    absolute -inset-px bg-gradient-to-r ${step.color} rounded-2xl
                    opacity-0 group-hover:opacity-100 transition-opacity blur
                  `}></div>

                  <div className="relative">
                    <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-6">{step.description}</p>

                    <div className="space-y-4 bg-black/20 rounded-xl p-6">
                      {step.conversation.map((message, mIndex) => (
                        <div
                          key={mIndex}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`
                              max-w-[80%] px-4 py-2 rounded-2xl
                              ${message.type === 'user'
                                ? 'bg-blue-500/20 text-white ml-auto'
                                : 'bg-purple-500/20 text-white'
                              }
                            `}
                          >
                            <p className="text-sm">{message.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-32">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Magic?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Transform your customer interactions with Slate's AI-powered brilliance
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              id="why-us-cta"
              data-gtm-category="CTA"
              data-gtm-action="click"
              data-gtm-label="Why Us - Get Started"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}