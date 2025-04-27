// src/App.tsx com menu móvel
import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import { ThemeToggle } from './components/ThemeToggle';
import { HighContrastToggle } from './components/HighContrastToggle';
import { SkipToContent } from './components/SkipToContent';
import { MobileMenu, MobileMenuButton } from './components/MobileMenu';
import { useIsMobile } from './hooks/useMediaQuery';
import './components/ThemeToggle.css';

// Skeleton loader para componentes em carregamento
import { SkeletonLoader } from './components/SkeletonLoader';

// Lazy loading dos componentes
const Home = lazy(() => import('./pages/Home'));
const FundamentosOverview = lazy(() => import('./pages/FundamentosOverview'));
const TopicPage = lazy(() => import('./pages/TopicPage'));

export default function App() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <>
      {/* Acessibilidade: skip link */}
      <SkipToContent />
      
      <header className="header" role="banner">
        <div className="container header-container">
          <a href="/" className="logo" aria-label="Aplicação de Aprendizagem - Página Inicial">
            Aplicação de Aprendizagem
          </a>
          
          {/* Navegação desktop */}
          {!isMobile && (
            <nav className="main-nav" aria-label="Menu Principal">
              <ul className="nav-list">
                <li>
                  <Link 
                    to="/" 
                    className={location.pathname === '/' ? 'active' : ''}
                    aria-current={location.pathname === '/' ? 'page' : undefined}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/fundamentos" 
                    className={location.pathname.includes('/fundamentos') ? 'active' : ''}
                    aria-current={location.pathname.includes('/fundamentos') ? 'page' : undefined}
                  >
                    Fundamentos
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          
          <div className="header-controls">
            <div className="theme-controls">
              <HighContrastToggle className="contrast-toggle" />
              <ThemeToggle />
            </div>
            
            {/* Botão de menu móvel */}
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </header>

      {/* Menu móvel */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      <main id="main-content" className="container" role="main">
        <Suspense fallback={<SkeletonLoader type="page" />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/fundamentos" element={<FundamentosOverview />} />
              <Route path="/fundamentos/:topicId" element={
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <TopicPage />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h2 className="footer-title">Aplicação de Aprendizagem</h2>
              <p>Uma plataforma para aprender programação de maneira estruturada e intuitiva.</p>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-subtitle">Links Rápidos</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/fundamentos">Fundamentos</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-subtitle">Acessibilidade</h3>
              <div className="footer-a11y-controls">
                <HighContrastToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Aplicação de Aprendizagem. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
