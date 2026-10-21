describe('cypress test', () => {
    it('Navigates to adm lucid', () => {
        cy.visit('/');
        cy.url().should('contain', 'admlucid.com');
        cy.url().should('eq', 'https://www.admlucid.com/');
    })

    it ('Login to adm lucid', () => {
        cy.login("test2@admlucid.com", "password123");
    })
})