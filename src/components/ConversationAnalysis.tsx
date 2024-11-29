import React from 'react';
import { BarChart3 } from 'lucide-react';

export function ConversationAnalysis() {
  return (
    <div className="relative bg-gray-50 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detailed Conversation Analysis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get granular insights into every customer interaction with comprehensive conversation metrics and sentiment tracking
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <img 
              src="https://i.imgur.com/frvK9wx.png"
              alt="Slate AI Conversation Analysis"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}