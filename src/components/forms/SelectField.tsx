import React from 'react';

interface SelectFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  id?: string;
  'data-gtm-category'?: string;
  'data-gtm-action'?: string;
  'data-gtm-label'?: string;
}

export function SelectField({ 
  label, 
  options, 
  value, 
  onChange, 
  required,
  id,
  ...gtmProps
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-gray-900"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        id={id}
        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
        onChange={(e) => {
          onChange(e.target.value);
          // GTM tracking for option selection
          const selectedOption = e.target.options[e.target.selectedIndex].text;
          const event = new CustomEvent('gtm.select', {
            detail: {
              category: gtmProps['data-gtm-category'],
              action: 'select',
              label: `${gtmProps['data-gtm-label']} - ${selectedOption}`
            }
          });
          document.dispatchEvent(event);
        }}
        value={value || ''}
        required={required}
        aria-required={required}
        {...gtmProps}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option 
            key={option} 
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}