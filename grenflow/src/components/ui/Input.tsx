import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  const inputId = React.useId()

  return (
    <div className="mb-4">
      {label && (
        <label
          className="block text-sm font-medium text-neutral-textSecondary mb-1"
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-all ${
          error ? 'border-status-error' : 'border-neutral-border'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-status-error">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-xs text-neutral-textSecondary">{helperText}</p>
      )}
    </div>
  )
}
