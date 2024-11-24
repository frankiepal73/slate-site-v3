import React from 'react';

interface InputFieldProps {
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  id?: string;
  'data-gtm-category'?: string;
  'data-gtm-action'?: string;
  'data-gtm-label'?: string;
}

export function InputField({ 
  type, 
  label, 
  value, 
  onChange, 
  placeholder, 
  required, 
  error,
  id,
  ...gtmProps
}: InputFieldProps) {
  return (
    <div 
      className="space-y-2"
      data-gtm-category="Form Field"
      data-gtm-action="view"
      data-gtm-label={`Input - ${label}`}
    >
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-white/70"
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
          error ? 'border-red-500' : 'border-white/10'
        }`}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value || ''}
        required={required}
        aria-required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        {...gtmProps}
      />
      {error && (
        <p 
          className="text-sm text-red-400 mt-1"
          id={`${id}-error`}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}