import React from 'react';

interface SingleCheckboxFieldProps {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  id?: string;
  'data-gtm-category'?: string;
  'data-gtm-action'?: string;
  'data-gtm-label'?: string;
}

export function SingleCheckboxField({ 
  text, 
  checked, 
  onChange, 
  required,
  id,
  ...gtmProps
}: SingleCheckboxFieldProps) {
  return (
    <label 
      htmlFor={id}
      className="flex items-start gap-2 cursor-pointer group"
    >
      <input
        id={id}
        type="checkbox"
        className="w-4 h-4 rounded text-blue-500 focus:ring-blue-500 mt-1"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        {...gtmProps}
      />
      <span className="text-white group-hover:text-white/90 transition-colors">
        {text}
        {required && <span className="text-red-400 ml-1">*</span>}
      </span>
    </label>
  );
}