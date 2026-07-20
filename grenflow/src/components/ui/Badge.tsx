import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'active' | 'pending' | 'inProgress' | 'canceled' | 'expired'
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'active',
  className = '',
  ...props
}) => {
  const variants = {
    active: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    inProgress: 'bg-blue-100 text-blue-800',
    canceled: 'bg-gray-100 text-gray-800',
    expired: 'bg-red-100 text-red-800',
  }

  return (
    <span
      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
