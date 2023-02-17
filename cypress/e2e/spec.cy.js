describe('Expenses', function() {
  it('should display a list of expenses', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.expense-item').should('have.length', 1);
  });

  it('should add a new expense to the list', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.theclick').click();
    cy.get('.title').type('Phone bill');
    cy.get('.amount').type('100');
    cy.get('.date').type('2023-01-18')
    cy.get('.submit').click();
    cy.get('.cancel').click();
    cy.get('.expense-item').should('have.length', 2);
  });

  it('should not allow expenses to be removed', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.expense-item').eq(0).should('not.contain', 'Remove');
  });
});

describe('Connection', function() {
  it('should connect to the website', function() {
    cy.visit('http://localhost:3000/');
    cy.url().should('include', 'localhost:3000/');
  });
});