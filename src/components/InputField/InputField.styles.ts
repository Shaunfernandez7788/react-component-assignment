// src/components/InputField/InputField.styles.ts

export const inputStyles = {
  base:
    'w-full rounded-md border transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    outlined: 'border-gray-300 bg-white focus:ring-blue-500',
    filled: 'border-gray-100 bg-gray-100 focus:ring-blue-500',
    ghost: 'border-transparent bg-transparent hover:bg-gray-100 focus:ring-blue-500',
  },
  sizes: {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  },
  states: {
    default: '',
    invalid: 'border-red-500 text-red-700 focus:ring-red-500',
  },
};