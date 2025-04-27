// jest.setup.ts (na raiz do projeto)
import { TextEncoder, TextDecoder } from 'util';

// 1. Polyfills para TextEncoder/TextDecoder
if (typeof global.TextEncoder === 'undefined') {
  // @ts-ignore
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  // @ts-ignore
  global.TextDecoder = TextDecoder;
}

// 2. Jest-DOM matchers
import '@testing-library/jest-dom/extend-expect';
