// jest.config.js (na raiz do projeto)

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Usa o preset ts-jest para interpretar arquivos TypeScript
  preset: 'ts-jest',
  // Ambiente de testes baseado em navegador (JSDOM)
  testEnvironment: 'jsdom',
  // Onde procurar arquivos de teste
  roots: ['<rootDir>/src'],
  // Mapeamento de módulos, necessário para importar .css sem erro
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  // Carrega polyfills e jest-dom após configurar o ambiente
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Tratamento de arquivos .ts e .tsx
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  // Padrões de nomes de arquivos de teste
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  // Limpa mocks entre testes
  clearMocks: true,
  // Ignora transformações em node_modules
  transformIgnorePatterns: ['/node_modules/'],
};
