import React from 'react';
import { Check, Sparkles } from 'lucide-react';

interface PackageCardProps {
  pkg: {
    name: string;
    price: string;
    subscription: string;
    features: string[];
  };
  isSelected: boolean;
  hasDiscount: boolean;
  onSelect: () => void;
}

export function PackageCard({ pkg, isSelected, hasDiscount, onSelect }: PackageCardProps) {
  const calculateDiscountedPrice = (price: string): number => {
    const numericPrice = parseInt(price.replace(/,/g, ''), 10);
    return hasDiscount ? Math.floor(numericPrice * 0.8) : numericPrice;
  };

  const packageId = pkg.name.toLowerCase().replace(/\s+/g, '-');
  const isPremium = pkg.name === 'Premium Package';

  return (
    <button
      onClick={onSelect}
      className={`relative p-4 sm:p-6 rounded-xl text-left w-full transition-all duration-300 ${
        isPremium 
          ? 'border-2 border-blue-500/30 scale-105 bg-gradient-to-r from-blue-500/10 to-purple-500/10'
          : ''
      } ${
        isSelected
          ? 'bg-blue-500/20 border-2 border-blue-500'
          : !isPremium ? 'bg-white/5 border-2 border-transparent hover:bg-white/10' : 'hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20'
      }`}
      id={`package-${packageId}`}
      data-gtm-category="Package Selection"
      data-gtm-action="click"
      data-gtm-label={pkg.name}
      aria-pressed={isSelected}
      role="radio"
    >
      {isPremium && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full text-base font-medium bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg shadow-blue-500/25">
            <Sparkles className="w-4 h-4" />
            Best Value
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
        {isSelected && (
          <Check className="w-5 h-5 text-blue-400" />
        )}
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-white">
            {hasDiscount ? (
              <>
                <span className="line-through text-white/50 text-2xl">${pkg.price}</span>
                {' '}
                <span className="text-blue-400">${calculateDiscountedPrice(pkg.price)}</span>
              </>
            ) : (
              `$${pkg.price}`
            )}
          </span>
          <span className="text-white/70">setup & configuration</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-white">${pkg.subscription}</span>
          <span className="text-white/70">/month</span>
        </div>
      </div>

      <div className="space-y-2">
        {pkg.features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2"
            id={`${packageId}-feature-${index}`}
          >
            <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="text-white/70 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </button>
  );
}