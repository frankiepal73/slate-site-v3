import React from 'react';

const partners = [
  { name: 'Tivoli Jewelers', logo: '/logos/tivoli.png' },
  { name: 'Calciotrici', logo: '/logos/calciotrici.png' },
  { name: 'Paradise Palms', logo: '/logos/paradise-palms.png' },
  { name: 'ProFit Outdoor Kitchens', logo: '/logos/profit.png' },
  { name: 'Gemini Designer', logo: '/logos/gemini.png' }
];

export function Partners() {
  return (
    <div className="relative bg-slate-900 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-white/70">Powering success across diverse industries</p>
      </div>

      {/* Infinite scroll ticker */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-ticker space-x-16 py-8">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px] h-20 bg-white/5 backdrop-blur-xl rounded-xl px-8 hover:bg-white/10 transition-colors"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}