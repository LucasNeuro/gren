import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'statistics' | 'operator' | 'mtr'
  hoverable?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverable = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-xl shadow-md p-6 transition-all duration-200'

  const variants = {
    default: 'bg-white',
    statistics: 'bg-gradient-to-br from-primary-green to-primary-blue text-white',
    operator: 'bg-white',
    mtr: 'bg-white',
  }

  const hoverStyles = hoverable ? 'hover:shadow-lg hover:-translate-y-1' : ''

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
