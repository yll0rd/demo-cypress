const loginPath = '/login';
const dashboardPath = '/dashboard';

const validUsername = 'testUser';
const validPassword = 'testPass123';

const usernameSelector = '[data-cy="username"]';
const passwordSelector = '[data-cy="password"]';
const loginButtonSelector = '[data-cy="login-btn"]';

describe('Login functionality', () => {
  it('logs in with valid credentials and redirects to the dashboard', () => {
    // Arrange
    cy.visit(loginPath);
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
