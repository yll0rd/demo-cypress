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

    it('Radio Button 3', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Web_Elements').click({ force: true })
        cy.get('.Radio3').should('not.be.checked')
        cy.get('.Radio3').check()
        cy.get('.Radio3').should('be.checked')
    })

    it('Click on Choose File 3', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Web_Elements').click({ force: true })
        cy.get('.File3').selectFile('cypress/fixtures/example.json')
    })

    it('Select Your Service', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Golf_Course').click({ force: true })
        cy.get('select').select('Mexico')
        cy.get('select').should('have.value', 'Mexico')
    })

    it('Validate Popup Texts for Button 1', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Web_Elements').click({ force: true })
        cy.get('#Button1').should('not.be.disabled').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Button has been disabled.Button1')
        })
    })

    it('Handling Links', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.get('a[href*="/Home"]').first().click({ force: true })
        cy.url().should('include', 'admlucid');
    })

    it('Mouseover Your Service', () => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
        cy.contains('Tests').click()
        cy.contains('Golf_Course').click({ force: true })
        cy.get('select').trigger('mouseover')
    })

})