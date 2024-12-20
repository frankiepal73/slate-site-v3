import React from 'react';
import { CheckboxField } from './CheckboxField';
import { SelectField } from './SelectField';
import { InputField } from './InputField';
import { SingleCheckboxField } from './SingleCheckboxField';

interface FormFieldProps {
  field: {
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    options?: string[];
    text?: string;
  };
  value: any;
  onChange: (value: any) => void;
  error?: string;
  stepTitle: string;
}

export function FormField({ field, value, onChange, error, stepTitle }: FormFieldProps) {
  const fieldId = `${stepTitle}-${field.label}`.toLowerCase().replace(/\s+/g, '-');

  const gtmProps = {
    'data-gtm-category': 'Form Field',
    'data-gtm-action': 'interact',
    'data-gtm-label': `${stepTitle} - ${field.label}`
  };

  if (field.type === 'select') {
    return (
      <SelectField
        label={field.label}
        options={field.options || []}
        value={value}
        onChange={onChange}
        required={field.required}
        id={`${fieldId}-select`}
        {...gtmProps}
      />
    );
  }

  if (field.type === 'checkbox') {
    const selectedOptions = Array.isArray(value) ? value : [];
    return (
      <CheckboxField
        label={field.label}
        options={field.options || []}
        selectedOptions={selectedOptions}
        onChange={(option) => {
          const newSelected = selectedOptions.includes(option)
            ? selectedOptions.filter(item => item !== option)
            : [...selectedOptions, option];
          onChange(newSelected);
        }}
        required={field.required}
        id={`${fieldId}-checkbox-group`}
        {...gtmProps}
      />
    );
  }

  if (field.type === 'single-checkbox') {
    return (
      <SingleCheckboxField
        text={field.text || ''}
        checked={value === 'true'}
        onChange={(checked) => onChange(checked.toString())}
        required={field.required}
        id={`${fieldId}-single-checkbox`}
        {...gtmProps}
      />
    );
  }

  return (
    <InputField
      type={field.type}
      label={field.label}
      value={value}
      onChange={onChange}
      placeholder={field.placeholder}
      required={field.required}
      error={error}
      id={`${fieldId}-input`}
      {...gtmProps}
    />
  );
}