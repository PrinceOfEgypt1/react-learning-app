// src/components/Card.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './Button';
import './Card.css';

interface CardProps {
  title: string;
  subtitle?: string;
  to?: string;
  disabled?: boolean;
  index?: number;
  isPopular?: boolean;
}

export function Card({ 
  title, 
  subtitle, 
  to, 
  disabled = false, 
  index = 0,
  isPopular = false
}: CardProps) {
  // Efeito de staggered animation baseado no índice
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  return (
    <motion.div
      className={`card ${isPopular ? 'card-popular' : ''}`}
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
      whileHover={to && !disabled ? { y: -8, scale: 1.02 } : {}}
      whileTap={to && !disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
    >
      {isPopular && <span className="card-badge">Popular</span>}
      
      <h3 className="card-title">{title}</h3>
      
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      
      <div className="card-footer">
        {to ? (
          <Link to={to} className="card-link" aria-disabled={disabled}>
            <Button 
              variant="primary" 
              disabled={disabled}
              className="card-button"
            >
              Ver Detalhes
            </Button>
          </Link>
        ) : (
          <div className="card-status">
            <Button 
              variant="secondary" 
              disabled={true}
              className="card-button"
            >
              Em Breve
            </Button>
            <span className="card-coming-soon">Em desenvolvimento</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
