// src/reportWebVitals.ts
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

export type MetricHandler = (metric: {
  name: string;
  value: number;
  delta?: number;
  id?: string;
  entries?: any[];
}) => void;

export default function reportWebVitals(onPerfEntry?: MetricHandler) {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
}
