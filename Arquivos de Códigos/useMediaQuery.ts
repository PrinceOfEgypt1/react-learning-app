// src/hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

/**
 * Hook personalizado para detectar se a media query está ativa
 * @param query A media query a ser verificada (ex: '(max-width: 768px)')
 * @returns boolean indicando se a media query corresponde
 */
export function useMediaQuery(query: string): boolean {
  // Estado inicial baseado na correspondência atual (ou false se no SSR)
  const getMatches = (): boolean => {
    // Verificar se estamos no navegador
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches);

  useEffect(() => {
    // Verificar novamente se estamos no navegador
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia(query);
    
    // Definir o estado inicial
    setMatches(mediaQuery.matches);

    // Criar um callback para rastrear mudanças
    const handleChange = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    // Adicionar listener para mudanças
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

/**
 * Hook para obter o breakpoint atual
 * @returns Breakpoint atual ('xs', 'sm', 'md', 'lg', 'xl')
 */
export function useBreakpoint(): 'xs' | 'sm' | 'md' | 'lg' | 'xl' {
  const isXs = useMediaQuery('(max-width: 480px)');
  const isSm = useMediaQuery('(min-width: 481px) and (max-width: 640px)');
  const isMd = useMediaQuery('(min-width: 641px) and (max-width: 768px)');
  const isLg = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isXl = useMediaQuery('(min-width: 1025px)');

  if (isXs) return 'xs';
  if (isSm) return 'sm';
  if (isMd) return 'md';
  if (isLg) return 'lg';
  return 'xl';
}

/**
 * Hook para verificar se o dispositivo é móvel
 * @returns boolean indicando se o dispositivo é móvel
 */
export function useIsMobile(): boolean {
  const breakpoint = useBreakpoint();
  return breakpoint === 'xs' || breakpoint === 'sm';
}

/**
 * Hook para verificar se o dispositivo é tablet
 * @returns boolean indicando se o dispositivo é tablet
 */
export function useIsTablet(): boolean {
  const breakpoint = useBreakpoint();
  return breakpoint === 'md';
}

/**
 * Hook para verificar se o dispositivo é desktop
 * @returns boolean indicando se o dispositivo é desktop
 */
export function useIsDesktop(): boolean {
  const breakpoint = useBreakpoint();
  return breakpoint === 'lg' || breakpoint === 'xl';
}
