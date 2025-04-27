// src/components/SkeletonLoader.tsx
import React from 'react';
import './SkeletonLoader.css';

type SkeletonType = 'page' | 'card' | 'text' | 'hero';

interface SkeletonLoaderProps {
  type: SkeletonType;
  count?: number;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  type, 
  count = 1 
}) => {
  // Helper para renderizar múltiplos skeletons
  const renderMultiple = (element: JSX.Element, count: number) => {
    return Array(count)
      .fill(0)
      .map((_, index) => (
        <React.Fragment key={index}>
          {React.cloneElement(element, { 'data-index': index })}
        </React.Fragment>
      ));
  };

  // Diferentes tipos de skeleton
  const renderSkeleton = () => {
    switch (type) {
      case 'hero':
        return (
          <div className="skeleton-hero" aria-busy="true" aria-live="polite">
            <div className="skeleton-hero-title"></div>
            <div className="skeleton-hero-text"></div>
            <div className="skeleton-hero-button"></div>
          </div>
        );
      
      case 'card':
        return (
          <div className="skeleton-card" aria-busy="true" aria-live="polite">
            <div className="skeleton-card-title"></div>
            <div className="skeleton-card-text"></div>
            <div className="skeleton-card-button"></div>
          </div>
        );
      
      case 'text':
        return (
          <div className="skeleton-text" aria-busy="true" aria-live="polite">
            <div className="skeleton-text-line"></div>
            <div className="skeleton-text-line"></div>
            <div className="skeleton-text-line" style={{ width: '75%' }}></div>
          </div>
        );
      
      case 'page':
      default:
        return (
          <div className="skeleton-page" aria-busy="true" aria-live="polite">
            <div className="skeleton-page-title"></div>
            <div className="skeleton-page-subtitle"></div>
            
            <div className="skeleton-hero" style={{ marginBottom: 'var(--spacing-8)' }}></div>
            
            <div className="skeleton-grid">
              {renderMultiple(
                <div className="skeleton-card">
                  <div className="skeleton-card-title"></div>
                  <div className="skeleton-card-text"></div>
                  <div className="skeleton-card-button"></div>
                </div>,
                6
              )}
            </div>
          </div>
        );
    }
  };

  return count === 1 ? renderSkeleton() : <>{renderMultiple(renderSkeleton(), count)}</>;
};
