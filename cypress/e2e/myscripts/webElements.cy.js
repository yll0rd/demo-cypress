describe('cypress test', () => {
    it('Navigates to web element Text1', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Web_Elements').click({ force: true });
        cy.get('#Text1').clear().type('Welcome to cypress testing');
    });

    it('enter texts in Textarea1', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Web_Elements').click({ force: true });
        cy.get('.TextArea3').clear().type('We call these action commands');
    });

    it ('clicks on Button 1', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Web_Elements').click({ force: true });
        cy.get('#Button1').click();
    });

    it('clicks on Choose File 3', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Web_Elements').click({ force: true });
        cy.get('.File3').click({ force: true });
    });
})