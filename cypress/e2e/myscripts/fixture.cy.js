require('cypress-xpath')

describe('cypress test', () => {
    beforeEach(() => {
        cy.once('uncaught:exception', () => false)
        cy.visit('/')
    })

    it('Select a country from cy.fixture', () => {
        cy.contains('Tests').click()
        cy.contains('Golf_Course').click({ force: true })
        cy.fixture('country.json').then((data) => {
            const countryName = 'Mexico'
            const golfCourse = data[countryName]
            cy.get('select', { timeout: 10000 }).should('be.visible').select(countryName)
            cy.get('select').should('have.value', countryName)
            cy.xpath('/html/body/div/main/table[1]/tbody/tr/td[2]/form/fieldset/button').click()
            cy.xpath('/html/body/div/main/table[2]/tbody/tr/td[1]').contains(golfCourse)
        })
    });

    it('Login using data stored in json', () => {
        cy.LoginAsTester()
    })
})