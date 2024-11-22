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

  const isPremium = pkg.name === 'Premium Package';

  return (
    <div
      className={`relative p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 ${
        isPremium 
          ? 'border-2 border-blue-500/30 scale-105 bg-gradient-to-r from-blue-500/10 to-purple-500/10'
          : ''
      } ${
        isSelected
          ? 'bg-blue-500/20 border-2 border-blue-500'
          : !isPremium ? 'bg-white/5 border-2 border-transparent hover:bg-white/10' : 'hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20'
      }`}
      onClick={onSelect}
    >
      {isPremium && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gradient-to-r from-blue-400 to-purple-400 text-white">
            <Sparkles className="w-3.5 h-3.5" />
            Best Value
          </span>
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
          <div key={index} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="text-white/70 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}