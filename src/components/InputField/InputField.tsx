// src/components/InputField/InputField.tsx

import React from 'react';
import { inputStyles } from './InputField.styles';

export type InputFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

export const InputField = ({
  label,
  helperText,
  errorMessage,
  variant = 'outlined',
  size = 'md',
  invalid = false,
  className,
  ...props
}: InputFieldProps) => {

  // Manually build the className string
  const state = invalid ? 'invalid' : 'default';
  const finalClassName = [
    inputStyles.base,
    inputStyles.variants[variant],
    inputStyles.sizes[size],
    inputStyles.states[state],
    className,
  ]
    .filter(Boolean) // Remove any null or undefined values
    .join(' '); // Join them into a single string

  return (
    <div className="w-full max-w-xs">
      {label && (
        <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        className={finalClassName}
        aria-invalid={invalid}
        {...props}
      />
      {invalid && errorMessage ? (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      ) : helperText ? (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      ) : null}
    </div>
  );
};