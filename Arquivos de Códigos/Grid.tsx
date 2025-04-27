// src/components/Grid.tsx
import React, { ReactNode } from 'react';
import './Grid.css';

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 'auto-fill' | 'auto-fit';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rowGap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  colGap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  minWidth?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Componente Grid responsivo
 * Cria um layout em grade flexível e responsivo
 * 
 * @param children Conteúdo do grid
 * @param className Classes CSS adicionais
 * @param cols Número de colunas (1-6 ou auto-fill/auto-fit)
 * @param gap Espaçamento entre itens
 * @param rowGap Espaçamento entre linhas
 * @param colGap Espaçamento entre colunas
 * @param minWidth Largura mínima dos itens (só funciona com auto-fill/auto-fit)
 * @param as Elemento HTML a ser usado (div por padrão)
 * @returns Componente Grid
 */
export function Grid({
  children,
  className = '',
  cols = 'auto-fill',
  gap = 'md',
  rowGap,
  colGap,
  minWidth = '280px',
  as: Component = 'div'
}: GridProps) {
  // Classes para colunas
  let colsClass = '';
  if (typeof cols === 'number') {
    colsClass = `grid-cols-${cols}`;
  } else {
    colsClass = `grid-cols-${cols}`;
  }

  // Classes para espaçamentos
  const gapClass = gap !== 'none' ? `grid-gap-${gap}` : '';
  const rowGapClass = rowGap && rowGap !== 'none' ? `grid-row-gap-${rowGap}` : '';
  const colGapClass = colGap && colGap !== 'none' ? `grid-col-gap-${colGap}` : '';

  // Estilo inline para minWidth (só para auto-fill/auto-fit)
  const style = 
    (cols === 'auto-fill' || cols === 'auto-fit') 
      ? { '--grid-min-width': minWidth } as React.CSSProperties
      : undefined;

  // Combinar todas as classes
  const gridClass = `grid ${colsClass} ${gapClass} ${rowGapClass} ${colGapClass} ${className}`.trim();

  return <Component className={gridClass} style={style}>{children}</Component>;
}

interface GridItemProps {
  children: ReactNode;
  className?: string;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  spanSm?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  spanMd?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  spanLg?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  spanXl?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Componente GridItem
 * Item dentro de um Grid com opções de span responsivo
 * 
 * @param children Conteúdo do item
 * @param className Classes CSS adicionais
 * @param span Quantas colunas o item ocupa
 * @param spanSm Colunas em telas pequenas
 * @param spanMd Colunas em telas médias
 * @param spanLg Colunas em telas grandes
 * @param spanXl Colunas em telas extra grandes 
 * @param as Elemento HTML a ser usado (div por padrão)
 * @returns Componente GridItem
 */
export function GridItem({
  children,
  className = '',
  span,
  spanSm,
  spanMd,
  spanLg,
  spanXl,
  as: Component = 'div'
}: GridItemProps) {
  // Classes para span em diferentes breakpoints
  const spanClass = span ? `grid-span-${span}` : '';
  const spanSmClass = spanSm ? `grid-span-sm-${spanSm}` : '';
  const spanMdClass = spanMd ? `grid-span-md-${spanMd}` : '';
  const spanLgClass = spanLg ? `grid-span-lg-${spanLg}` : '';
  const spanXlClass = spanXl ? `grid-span-xl-${spanXl}` : '';

  // Combinar todas as classes
  const itemClass = `grid-item ${spanClass} ${spanSmClass} ${spanMdClass} ${spanLgClass} ${spanXlClass} ${className}`.trim();

  return <Component className={itemClass}>{children}</Component>;
}
