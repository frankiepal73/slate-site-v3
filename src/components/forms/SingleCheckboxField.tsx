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
        className="w-4 h-4 rounded text-primary-500 focus:ring-primary-500 mt-1"
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
          // GTM tracking for checkbox toggle
          const event = new CustomEvent('gtm.click', {
            detail: {
              category: gtmProps['data-gtm-category'],
              action: 'toggle',
              label: `${gtmProps['data-gtm-label']} - ${text}`
            }
          });
          document.dispatchEvent(event);
        }}
        required={required}
        aria-required={required}
        {...gtmProps}
      />
      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
        {text}
        {required && <span className="text-red-500 ml-1">*</span>}
      </span>
    </label>
  );
}