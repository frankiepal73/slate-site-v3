import React from 'react';
import { BarChart3 } from 'lucide-react';

export function DashboardPreview() {
  return (
    <div className="relative bg-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary-500/10 rounded-full mb-6">
            <BarChart3 className="w-8 h-8 text-primary-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Analytics at Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Fingertips</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track performance, measure success, and optimize your customer interactions with our intuitive dashboard
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <img 
              src="https://i.imgur.com/J9O5DNg.png"
              alt="Slate AI Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}