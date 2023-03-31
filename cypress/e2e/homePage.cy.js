/// <reference types="cypress" />

describe('Test', () => {
    it('Get title', () => {
      cy.visit('http://localhost/')
      cy.get('h1').should('contain', 'Connected!')
      cy.get('h3').should('contain', 'MySQL connected!')
    })
  })