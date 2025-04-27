// src/components/MobileMenu.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../hooks/useMediaQuery';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Fechar menu quando a localização muda (navegação)
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname, isOpen, onClose]);
  
  // Desabilitar scroll do body quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Se não for mobile, não renderizar nada
  if (!isMobile) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay com fade */}
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Menu com slide */}
          <motion.nav
            className="mobile-menu"
            role="navigation"
            aria-label="Menu móvel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Cabeçalho do menu */}
            <div className="mobile-menu-header">
              <h2 className="mobile-menu-title">Menu</h2>
              <button
                className="mobile-menu-close"
                onClick={onClose}
                aria-label="Fechar menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            {/* Links do menu */}
            <ul className="mobile-menu-links">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  to="/" 
                  className={location.pathname === '/' ? 'active' : ''}
                  aria-current={location.pathname === '/' ? 'page' : undefined}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  to="/fundamentos" 
                  className={location.pathname.includes('/fundamentos') ? 'active' : ''}
                  aria-current={location.pathname.includes('/fundamentos') ? 'page' : undefined}
                >
                  Fundamentos
                </Link>
              </motion.li>
              
              {/* Seção de configurações */}
              <motion.li 
                className="mobile-menu-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span>Configurações</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="#" onClick={(e) => {
                  e.preventDefault();
                  // Aqui poderia abrir um modal de configurações
                }}>
                  Preferências
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * Componente botão para abrir o menu móvel
 */
export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <button
      className="mobile-menu-button"
      onClick={onClick}
      aria-label="Abrir menu"
      aria-haspopup="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  );
}
