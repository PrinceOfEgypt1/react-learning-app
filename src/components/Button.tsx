// src/components/Button.tsx
import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
// CSS Module contendo estilos sugeridos pelo Aider
// Veja todo o conteúdo em src/components/Button.module.css
import styles from './Button.module.css';

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
  const allClasses = cx(
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${size}`],
    icon && styles['btn-with-icon'],
    icon && styles[`icon-${iconPosition}`],
    isLoading && styles['btn-loading'],
    disabled && styles['btn-disabled'],
    className
  );

  // Para evitar conflitos de tipos do Framer Motion, fazemos cast:
  const motionProps = props as any;

  return (
    <motion.button
      className={allClasses}
      disabled={disabled || isLoading}
      whileHover={!disabled && !isLoading ? { scale: 1.03 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.97 } : {}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      {...motionProps}
    >
      {isLoading && (
        <span className={styles['btn-spinner']} aria-hidden="true">
          {/* ... código SVG omitido para brevidade ... */}
        </span>
      )}

      {icon && iconPosition === 'left' && !isLoading && (
        <span className={styles['btn-icon']}>{icon}</span>
      )}

      <span className={styles['btn-text']}>
        {isLoading ? 'Carregando...' : children}
      </span>

      {icon && iconPosition === 'right' && !isLoading && (
        <span className={styles['btn-icon']}>{icon}</span>
      )}
    </motion.button>
  );
}
