// src/components/Container.tsx
import React, { ReactNode } from 'react';
import './Container.css';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  fluid?: boolean;
  narrow?: boolean;
}

/**
 * Componente Container responsivo
 * Encapsula o conteúdo com margens e largura máxima responsivas
 * 
 * @param children Conteúdo do container
 * @param className Classes CSS adicionais
 * @param as Elemento HTML a ser usado (div por padrão)
 * @param fluid Se verdadeiro, remove a largura máxima (100%)
 * @param narrow Se verdadeiro, usa uma largura menor para conteúdo de leitura
 * @returns Componente Container
 */
export function Container({
  children,
  className = '',
  as: Component = 'div',
  fluid = false,
  narrow = false
}: ContainerProps) {
  const containerClass = `container ${fluid ? 'container-fluid' : ''} ${
    narrow ? 'container-narrow' : ''
  } ${className}`;

  return <Component className={containerClass}>{children}</Component>;
}
