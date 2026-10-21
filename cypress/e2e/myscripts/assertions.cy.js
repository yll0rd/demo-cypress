describe('Cypress test', () => {
    it('Navigates to web elements and assert them using should', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Web_Elements').click({ force: true });

        cy.get('h1').contains('Web Elements and Locators');
        cy.get('h1').should('have.text', 'Web Elements and Locators');
        
        if (cy.get('.Submit3').should('have.value', 'submit 3'))
            cy.get('.Submit3').click();

        cy.get('#Submit1').should('have.value', 'submit 1').click();
    });

    it('Navigates to golf and assert them using should', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Golf_Course').click({ force: true });

        // should droplist, it has length
        cy.get('.select').find('option').should('have.length', 11);

        cy.get('.btn').first().should('be.visible').click();
    });

    it('Navigates to web elements and assert them using expect', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Web_Elements').click({ force: true });

        // contains text
        cy.get('h1').then(($el) => {
            expect($el.text()).to.be.eq('Web Elements and Locators');
        });

        cy.get('h2').then(($el) => {
            expect($el.text()).to.be.contains('CHILD CARE REGISTRATION');
        });

        // Button, checkbox state
        cy.get('#Button1').then(($el) => {
            expect($el.visit);
        });

        cy.get('#Checkbox1').then(($el) => {
            expect($el.unchecked);
        });
    });
})