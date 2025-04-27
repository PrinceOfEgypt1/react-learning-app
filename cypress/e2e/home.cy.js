// cypress/e2e/home.cy.js
/// <reference types="cypress" />

describe('Home Page', () => {
  it('deve exibir título e seis cards desabilitados', () => {
    cy.visit('/');
    cy.contains('Aplicação de Aprendizagem').should('be.visible');
    cy.get('.grid').within(() => {
      cy.get('button').should('have.length', 6).and('be.disabled');
    });
  });
});