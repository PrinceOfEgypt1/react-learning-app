// cypress/e2e/fundamentos.cy.js
/// <reference types="cypress" />

describe('Fundamentos Page', () => {
  it('deve navegar para Fundamentos e listar tópicos', () => {
    cy.visit('/');
    cy.contains('Explorar Fundamentos').click();
    cy.url().should('include', '/fundamentos');
    cy.get('.grid').within(() => {
      cy.get('button').should('have.length', 6);
    });
  });
});