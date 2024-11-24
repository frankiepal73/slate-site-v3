import React from 'react';

interface CheckboxFieldProps {
  label: string;
  options: string[];
  required?: boolean;
  selectedOptions: string[];
  onChange: (option: string) => void;
  id?: string;
  'data-gtm-category'?: string;
  'data-gtm-action'?: string;
  'data-gtm-label'?: string;
}

export function CheckboxField({ 
  label, 
  options, 
  required, 
  selectedOptions, 
  onChange,
  id,
  ...gtmProps
}: CheckboxFieldProps) {
  return (
    <div className="space-y-2">
      <label 
        id={`${id}-label`}
        className="block text-sm font-medium text-white/70"
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div 
        className="space-y-2"
        role="group"
        aria-labelledby={`${id}-label`}
      >
        {options.map((option, index) => (
          <label 
            key={option} 
            className="flex items-center gap-2 cursor-pointer group"
            htmlFor={`${id}-${index}`}
          >
            <input
              id={`${id}-${index}`}
              type="checkbox"
              className="w-4 h-4 rounded text-blue-500 focus:ring-blue-500"
              checked={selectedOptions.includes(option)}
              onChange={() => {
                onChange(option);
                // GTM tracking for checkbox toggle
                const event = new CustomEvent('gtm.click', {
                  detail: {
                    category: gtmProps['data-gtm-category'],
                    action: 'toggle',
                    label: `${gtmProps['data-gtm-label']} - ${option}`
                  }
                });
                document.dispatchEvent(event);
              }}
              required={required && selectedOptions.length === 0}
              aria-required={required}
              data-gtm-category={gtmProps['data-gtm-category']}
              data-gtm-action="toggle"
              data-gtm-label={`${gtmProps['data-gtm-label']} - ${option}`}
            />
            <span className="text-white group-hover:text-white/90 transition-colors">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}