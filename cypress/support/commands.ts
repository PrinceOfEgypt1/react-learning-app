// cypress/support/commands.ts
// commands.ts - comandos customizados
// Exemplo: adicionar cy.login se tiver autenticação

/// <reference types="cypress" />
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /** Comando custom para login */
      login(username: string, password: string): void;
    }
  }
}

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/login');
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
