require('cypress-xpath')

describe('cypress test', () => {
    it('cy.get default wait for 4 seconds', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Web_Elements').click({ force: true })
        cy.get('#Button1').should('be.visible').click()
    })

    it('Navigate to web element Text1 cy.wait(2000)', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Web_Elements').click({ force: true })
        //cy.wait(2000) another 2 seconds to load web elements
        cy.wait(2000)
        cy.get('#Text1').clear().type('Welcome to cypress testing')
        cy.get('#Text1').should('have.value', 'Welcome to cypress testing')
    })

    it('Navigate to web element Checkbox1', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Web_Elements').click({ force: true })
        //Waiting for specific Elements should
        cy.get('#Checkbox1').should('be.visible').check()
        cy.get('#Checkbox1').should('be.checked')
        cy.get('#Checkbox1').uncheck()
        cy.get('#Checkbox1').should('not.be.checked')
    })

    it('Select Your Service', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Golf_Course').click({ force: true })
        //Wait using timeout and should
        cy.get('select', { timeout: 10000 }).should('be.visible').select('Mexico')
        cy.get('select').should('have.value', 'Mexico')
    })
});