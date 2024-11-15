import React from 'react';
import { Zap, Plus } from 'lucide-react';

const integrations = [
  {
    name: 'Shopify',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png',
    alt: 'Shopify Integration'
  },
  {
    name: 'Facebook Messenger',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo.png',
    alt: 'Facebook Messenger Integration'
  },
  {
    name: 'WhatsApp',
    logo: 'https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png',
    alt: 'WhatsApp Integration'
  },
  {
    name: 'Instagram',
    logo: 'https://logos-world.net/wp-content/uploads/2020/06/Instagram-Logo.png',
    alt: 'Instagram Integration'
  },
  {
    name: 'Salesforce',
    logo: 'https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Logo.png',
    alt: 'Salesforce Integration'
  },
  {
    name: 'HubSpot',
    logo: 'https://logos-world.net/wp-content/uploads/2022/01/HubSpot-Logo.png',
    alt: 'HubSpot Integration'
  },
  {
    name: 'SAP',
    logo: 'https://logos-world.net/wp-content/uploads/2022/02/SAP-Logo.png',
    alt: 'SAP Integration'
  }
];

// Split integrations into two rows
const row1 = integrations.slice(0, Math.ceil(integrations.length / 2));
const row2 = integrations.slice(Math.ceil(integrations.length / 2));

export function Integrations() {
  return (
    <div className="relative bg-slate-900 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-blue-400 mb-4">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Powerful Integrations</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            We play nice with your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">favorite tools</span>
          </h2>
        </div>

        {/* Animated tickers - both mobile and desktop */}
        <div>
          {/* First row - moves left */}
          <div className="relative mb-4 md:mb-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-12 md:before:w-20 before:bg-gradient-to-r before:from-slate-900 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-12 md:after:w-20 after:bg-gradient-to-l after:from-slate-900 after:to-transparent after:z-10">
            <div className="flex space-x-4 md:space-x-8 animate-ticker">
              {[...row1, ...row1].map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="flex-shrink-0 group relative bg-white rounded-xl md:rounded-2xl hover:bg-white/90 transition-all duration-300 w-32 md:w-48"
                >
                  <div className="relative flex items-center justify-center p-4 md:p-8">
                    <img
                      src={integration.logo}
                      alt={integration.alt}
                      className="w-full h-auto max-h-8 md:max-h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - moves right */}
          <div className="relative mb-8 md:mb-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-12 md:before:w-20 before:bg-gradient-to-r before:from-slate-900 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-12 md:after:w-20 after:bg-gradient-to-l after:from-slate-900 after:to-transparent after:z-10">
            <div className="flex space-x-4 md:space-x-8 animate-ticker-reverse">
              {[...row2, ...row2].map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="flex-shrink-0 group relative bg-white rounded-xl md:rounded-2xl hover:bg-white/90 transition-all duration-300 w-32 md:w-48"
                >
                  <div className="relative flex items-center justify-center p-4 md:p-8">
                    <img
                      src={integration.logo}
                      alt={integration.alt}
                      className="w-full h-auto max-h-8 md:max-h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* "And more" text */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl text-white/70 text-sm hover:bg-white/10 transition-colors">
            and more <Plus className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
}