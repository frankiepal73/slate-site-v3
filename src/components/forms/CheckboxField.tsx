import React from 'react';

interface CheckboxFieldProps {
  label: string;
  options: string[];
  required?: boolean;
  selectedOptions: string[];
  onChange: (option: string) => void;
}

export function CheckboxField({ label, options, required, selectedOptions, onChange }: CheckboxFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white/70">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 rounded text-blue-500 focus:ring-blue-500"
              checked={selectedOptions.includes(option)}
              onChange={() => onChange(option)}
            />
            <span className="text-white">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}