import React from 'react';

interface InputFieldProps {
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export function InputField({ type, label, value, onChange, placeholder, required, error }: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white/70">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
          error ? 'border-red-500' : 'border-white/10'
        }`}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value || ''}
      />
      {error && (
        <p className="text-sm text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
}