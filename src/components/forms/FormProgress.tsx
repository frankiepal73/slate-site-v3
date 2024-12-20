import React from 'react';
import { Check } from 'lucide-react';

interface FormProgressProps {
  steps: Array<{
    title: string;
    icon: React.ElementType;
  }>;
  currentStep: number;
}

export function FormProgress({ steps, currentStep }: FormProgressProps) {
  return (
    <div 
      className="relative mb-12"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={steps.length}
      aria-valuenow={currentStep + 1}
      id="form-progress-container"
      data-gtm-category="Form Progress"
      data-gtm-action="view"
      data-gtm-label={`Step ${currentStep + 1} of ${steps.length}`}
    >
      <div className="h-2 bg-white/10 rounded-full">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
      <div className="absolute -top-2 left-0 right-0 flex justify-between">
        {steps.map((step, index) => (
          <button 
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              index <= currentStep 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'bg-white/10 text-white/50'
            }`}
            id={`progress-step-button-${index}`}
            data-gtm-category="Form Progress"
            data-gtm-action="click"
            data-gtm-label={`Step ${index + 1} - ${step.title}`}
            disabled={index > currentStep + 1}
            aria-current={index === currentStep ? 'step' : undefined}
          >
            {index < currentStep ? (
              <Check className="w-4 h-4" />
            ) : (
              <step.icon className="w-4 h-4" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}