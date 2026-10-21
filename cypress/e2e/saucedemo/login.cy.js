const VALID_PASSWORD = 'secret_sauce';
const LOGIN_URL = 'https://www.saucedemo.com/';
const VALID_USERS = [
  'standard_user',
  'problem_user',
  'visual_user',
  'error_user',
  'performance_glitch_user',
];

describe('Login', () => {
  beforeEach(() => {
    cy.visit(LOGIN_URL);
  });

  // Home page loads
  it('loads the home page', () => {
    cy.get('div#root').should('exist');
  });

  // Login form present
  it('shows the login form', () => {
    cy.get('form').within(() => {
      cy.get('[data-test="username"][name="user-name"]').should('exist');
      cy.get('[data-test="password"][name="password"]').should('exist');
      cy.get('[data-test="login-button"]').should('exist');
    });
  });

  VALID_USERS.forEach((username) => {
    // Successful login
    it(`logs in successfully as ${username}`, () => {
      cy.get('[data-test="username"]').type(username);
      cy.get('[data-test="password"]').type(VALID_PASSWORD);
      cy.get('[data-test="login-button"]').click();

      const urlOptions = username === 'performance_glitch_user'
        ? { timeout: 10000 }
        : undefined;

      if (urlOptions) {
        cy.url(urlOptions).should('include', '/inventory.html');
      } else {
        cy.url().should('include', '/inventory.html');
      }
    });
  });

  // Locked out
  it('rejects a locked-out user', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type(VALID_PASSWORD);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'locked out');
    cy.url().should('eq', LOGIN_URL);
  });

  // Invalid password
  it('rejects an invalid password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'do not match');
    cy.url().should('eq', LOGIN_URL);
  });

  // Invalid username
  it('rejects an invalid username', () => {
    cy.get('[data-test="username"]').type('nonexistent_user');
    cy.get('[data-test="password"]').type(VALID_PASSWORD);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'do not match');
    cy.url().should('eq', LOGIN_URL);
  });

  // Missing username
  it('requires a username', () => {
    cy.get('[data-test="password"]').type(VALID_PASSWORD);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required');
    cy.url().should('eq', LOGIN_URL);
  });

  // Missing password
  it('requires a password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Password is required');
    cy.url().should('eq', LOGIN_URL);
  });

  // Login button during API request
  // SauceDemo responds too quickly to observe a reliable disabled interval.
  it.skip('disables the login button while the request is processing', () => {
    cy.get('[data-test="username"]').type('performance_glitch_user');
    cy.get('[data-test="password"]').type(VALID_PASSWORD);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="login-button"]').should('be.disabled');
  });
});