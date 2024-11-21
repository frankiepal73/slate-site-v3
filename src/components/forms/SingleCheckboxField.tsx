import React from 'react';

interface SingleCheckboxFieldProps {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
}

export function SingleCheckboxField({ text, checked, onChange, required }: SingleCheckboxFieldProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer group">
      <input
        type="checkbox"
        className="w-4 h-4 rounded text-blue-500 focus:ring-blue-500"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="text-white group-hover:text-white/90 transition-colors">
        {text}
        {required && <span className="text-red-400 ml-1">*</span>}
      </span>
    </label>
  );
}