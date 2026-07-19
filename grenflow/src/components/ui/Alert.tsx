import React from 'react'
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'warning' | 'info'
  title?: string
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  title,
  className = '',
  ...props
}) => {
  const variants = {
    success: {
      container: 'bg-green-50 text-green-800',
      icon: <CheckCircleIcon className="h-5 w-5 text-green-400" />,
    },
    error: {
      container: 'bg-red-50 text-red-800',
      icon: <ExclamationCircleIcon className="h-5 w-5 text-red-400" />,
    },
    warning: {
      container: 'bg-yellow-50 text-yellow-800',
      icon: <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />,
    },
    info: {
      container: 'bg-blue-50 text-blue-800',
      icon: <InformationCircleIcon className="h-5 w-5 text-blue-400" />,
    },
  }

  const config = variants[variant]

  return (
    <div
      className={`rounded-md p-4 mb-4 ${config.container} ${className}`}
      {...props}
    >
      <div className="flex">
        <div className="flex-shrink-0">{config.icon}</div>
        <div className="ml-3">
          {title && <p className="text-sm font-medium">{title}</p>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}
