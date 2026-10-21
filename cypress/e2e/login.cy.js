const dashboardPath = '/dashboard';
const browserOrigin = 'https://example.cypress.io';
const loginPageFile = 'login.html';

const validUsername = 'testUser';
const validPassword = 'testPass123';

const usernameSelector = '[data-cy="username"]';
const passwordSelector = '[data-cy="password"]';
const loginButtonSelector = '[data-cy="login-btn"]';

describe('Login functionality', () => {
  it('logs in with valid credentials from login.html and redirects to the dashboard', () => {
    // Arrange
    cy.readFile(loginPageFile).then((loginPageHtml) => {
      cy.visit(browserOrigin);
      cy.window().then((window) => {
        window.document.open();
        window.document.write(loginPageHtml);
        window.document.close();
      });
    });

    cy.get(usernameSelector).should('be.visible');
    cy.get(passwordSelector).should('be.visible');

    // Act
    cy.get(usernameSelector).type(validUsername);
    cy.get(passwordSelector).type(validPassword);
    cy.get(loginButtonSelector).should('be.visible').click();

    // Assert
    cy.url().should('include', dashboardPath);
  });
});
