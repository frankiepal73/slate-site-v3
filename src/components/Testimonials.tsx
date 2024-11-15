import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CEO at EcomGrowth",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    content: "Slate transformed our customer service. Our response times dropped by 90% and sales increased by 45% in just two months.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    content: "The AI's ability to understand context and provide personalized recommendations has been a game-changer for our business.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "E-commerce Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    content: "Setup was incredibly fast, and the results were immediate. Our conversion rate doubled within weeks.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <div className="relative bg-slate-900 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Business Leaders</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            See why thousands of businesses trust Slate to drive growth and deliver exceptional customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              
              <div className="relative">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-white/90 mb-6">{testimonial.content}</p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}