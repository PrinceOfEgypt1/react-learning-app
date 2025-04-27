// src/components/Button.tsx
import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  isLoading = false,
  icon,
  iconPosition = 'left',
  className = '',
  children, 
  disabled,
  ...props 
}: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const iconClass = icon ? 'btn-with-icon' : '';
  const iconPosClass = icon ? `icon-${iconPosition}` : '';
  const loadingClass = isLoading ? 'btn-loading' : '';
  const disabledClass = disabled ? 'btn-disabled' : '';
  
  const allClasses = [
    baseClass, 
    variantClass, 
    sizeClass, 
    iconClass, 
    iconPosClass,
    loadingClass,
    disabledClass,
    className
  ].join(' ');
  
  // Micro-interações com Framer Motion
  return (
    <motion.button
      className={allClasses}
      disabled={disabled || isLoading}
      whileHover={!disabled && !isLoading ? { scale: 1.03 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.97 } : {}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {isLoading && (
        <span className="btn-spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="32" strokeDashoffset="8">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 12 12"
                to="360 12 12"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </span>
      )}
      
      {icon && iconPosition === 'left' && !isLoading && (
        <span className="btn-icon">{icon}</span>
      )}
      
      <span className="btn-text">
        {isLoading ? 'Carregando...' : children}
      </span>
      
      {icon && iconPosition === 'right' && !isLoading && (
        <span className="btn-icon">{icon}</span>
      )}
    </motion.button>
  );
}
