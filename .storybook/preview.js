// (no diretório raiz) .storybook/preview.js
import '../src/index.css';
import { withPerformance } from 'storybook-addon-performance';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true }
};

export const decorators = [withPerformance];