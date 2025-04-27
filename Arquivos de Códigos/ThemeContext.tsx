// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeMode, getTheme, lightTheme } from '../styles/theme';

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
}

// Criar o contexto com valor padrão
const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  mode: 'light',
  toggleTheme: () => {},
  isHighContrast: false,
  toggleHighContrast: () => {}
});

// Hook personalizado para acessar o contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Verificar se há preferência salva no localStorage
  const getSavedTheme = (): ThemeMode => {
    if (typeof window === 'undefined') return 'light';
    
    const savedTheme = localStorage.getItem('theme-mode');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme;
    }
    
    // Verificar preferência do sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  };
  
  // Verificar se há preferência de alto contraste
  const getSavedHighContrast = (): boolean => {
    if (typeof window === 'undefined') return false;
    
    const savedHighContrast = localStorage.getItem('high-contrast-mode');
    if (savedHighContrast) {
      return savedHighContrast === 'true';
    }
    
    // Verificar preferência de sistema para alto contraste
    if (window.matchMedia && window.matchMedia('(prefers-contrast: more)').matches) {
      return true;
    }
    
    return false;
  };

  const [mode, setMode] = useState<ThemeMode>(getSavedTheme);
  const [theme, setTheme] = useState<Theme>(getTheme(mode));
  const [isHighContrast, setIsHighContrast] = useState<boolean>(getSavedHighContrast);

  // Alternar tema
  const toggleTheme = () => {
    setMode(prevMode => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-mode', newMode);
      return newMode;
    });
  };
  
  // Alternar modo de alto contraste
  const toggleHighContrast = () => {
    setIsHighContrast(prevValue => {
      const newValue = !prevValue;
      localStorage.setItem('high-contrast-mode', String(newValue));
      return newValue;
    });
  };

  // Atualizar o tema sempre que o modo mudar
  useEffect(() => {
    setTheme(getTheme(mode));
    document.documentElement.setAttribute('data-theme', mode);
    
    // Adicionar/remover a classe dark ao elemento body
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [mode]);
  
  // Atualizar o modo de alto contraste
  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  // Escutar mudanças de preferência no sistema
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const highContrastMediaQuery = window.matchMedia('(prefers-contrast: more)');
    
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme-mode')) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };
    
    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('high-contrast-mode')) {
        setIsHighContrast(e.matches);
      }
    };
    
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    highContrastMediaQuery.addEventListener('change', handleHighContrastChange);
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
      highContrastMediaQuery.removeEventListener('change', handleHighContrastChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme, isHighContrast, toggleHighContrast }}>
      {children}
    </ThemeContext.Provider>
  );
};
