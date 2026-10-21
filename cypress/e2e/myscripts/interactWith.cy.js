require('cypress-xpath');

describe('cypress test', () => {
    it('clicks on Button 1', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Web_Elements').click({ force: true })
        cy.get('#Button1').should('not.be.disabled').click()
    })

    it('Navigates to web element Text1', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Web_Elements').click({ force: true })
        cy.get('#Text1').clear().type('Welcome to cypress testing')
        cy.get('#Text1').should('have.value', 'Welcome to cypress testing')
    })

    it('Navigates to web element Checkbox1', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Web_Elements').click({ force: true })
        cy.get('#Checkbox1').check()
        cy.get('#Checkbox1').should('be.checked')
        cy.get('#Checkbox1').uncheck()
        cy.get('#Checkbox1').should('not.be.checked')
    })
})