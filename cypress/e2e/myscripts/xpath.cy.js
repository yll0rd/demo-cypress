require('cypress-xpath');

describe('cypress test', () => {
    it('Navigates to web element Text1', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Web_Elements').click({ force: true });
        cy.xpath('//*[@id="Text1"]').clear().type('Welcome to cypress testing');
    });

    it('Enters texts in Textarea', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Web_Elements').click({ force: true });
        cy.xpath('/html/body/div/main/table/tbody/tr[4]/td[8]/textarea').clear().type('We call these action commands');
    });

    it('Clicks on Button 1', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Web_Elements').click({ force: true });
        cy.xpath('//*[@id="Button1"]').click();
    });

    it('Clicks on Choose File 3', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Web_Elements').click({ force: true });
        cy.xpath('/html/body/div/main/table/tbody/tr[4]/td[6]/input').click();
    });
});