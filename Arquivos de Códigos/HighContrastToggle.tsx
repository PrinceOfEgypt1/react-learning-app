// src/components/HighContrastToggle.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './HighContrastToggle.css';

interface HighContrastToggleProps {
  className?: string;
}

export function HighContrastToggle({ className = '' }: HighContrastToggleProps) {
  const { isHighContrast, toggleHighContrast } = useTheme();
  
  return (
    <button
      onClick={toggleHighContrast}
      className={`high-contrast-toggle ${className}`}
      aria-label={`${isHighContrast ? 'Desativar' : 'Ativar'} modo de alto contraste`}
      title={`${isHighContrast ? 'Desativar' : 'Ativar'} modo de alto contraste`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
        <path d="M12 18a6 6 0 0 0 0-12v12z"></path>
      </svg>
      <span className="toggle-text">
        {isHighContrast ? 'Contraste normal' : 'Alto contraste'}
      </span>
    </button>
  );
}
