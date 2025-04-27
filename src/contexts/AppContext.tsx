// src/contexts/AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definição da forma de dados do contexto
interface AppContextData {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  userToken: string | null;
  setUserToken: (token: string | null) => void;
}

// Estado inicial
const initialState: AppContextData = {
  theme: 'light',
  toggleTheme: () => {},
  userToken: null,
  setUserToken: () => {},
};

// Criação do contexto
const AppContext = createContext<AppContextData>(initialState);

// Provider para envolver a aplicação
export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialState.theme);
  const [userToken, setUserToken] = useState<string | null>(initialState.userToken);

  function toggleTheme() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme, userToken, setUserToken }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook customizado para consumir o contexto
export function useAppContext(): AppContextData {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
