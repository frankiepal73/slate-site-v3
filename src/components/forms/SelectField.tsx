import React from 'react';

interface SelectFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function SelectField({ label, options, value, onChange, required }: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white/70">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <select
        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onChange(e.target.value)}
        value={value || ''}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}