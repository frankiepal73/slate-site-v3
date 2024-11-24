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
    <div 
      className="space-y-2"
      data-gtm-category="Form Field"
      data-gtm-action="view"
      data-gtm-label={`Select - ${label}`}
    >
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-white/70"
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <select
        id={id}
        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onChange(e.target.value)}
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
            data-gtm-category="Form Field"
            data-gtm-action="select"
            data-gtm-label={`${label} - ${option}`}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}