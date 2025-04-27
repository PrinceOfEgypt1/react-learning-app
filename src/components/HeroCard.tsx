// src/components/HeroCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './Button';
import './HeroCard.css';

export function HeroCard() {
  // Variantes de animação para cada elemento
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <motion.div
      className="hero-card"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <div className="hero-content">
        <motion.h2 
          className="hero-title"
          variants={itemVariants}
        >
          Fundamentos da Programação
        </motion.h2>
        
        <motion.p 
          className="hero-description"
          variants={itemVariants}
        >
          Domine a base de toda programação: lógica, algoritmos, estruturas de decisão, repetição e funções. Comece sua jornada de forma sólida!
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link to="/fundamentos" className="hero-link">
            <Button variant="secondary" className="hero-button">
              Explorar Fundamentos
            </Button>
          </Link>
        </motion.div>
      </div>
      
      <div className="hero-decoration" aria-hidden="true">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
    </motion.div>
  );
}
