import React from 'react';
import { Bot, Play, CheckCircle2 } from 'lucide-react';

const highlights = [
  "See Slate in action with real customer conversations",
  "Learn about our AI's natural language capabilities",
  "Discover how Slate integrates with your existing tools",
  "Watch automated lead capture and qualification",
  "See real-time analytics and reporting features"
];

export function WatchDemo() {
  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-full mb-6">
            <Bot className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Watch Slate in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Action</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            See how Slate transforms customer interactions and drives business growth
          </p>
        </div>

        {/* Main video section */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Video player */}
          <div className="md:col-span-2">
            <div className="relative aspect-video bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden group hover:bg-white/10 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
              
              {/* Play button */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center transition-all group-hover:scale-110">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </button>

              {/* Video thumbnail overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Video duration */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-xl text-sm text-white">
                4:32
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-8">What You'll See</h3>
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <p className="text-white/80">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to transform your business?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all">
              Get Started Now
            </button>
            <button className="px-8 py-4 bg-white/10 rounded-xl text-white font-medium hover:bg-white/20 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}