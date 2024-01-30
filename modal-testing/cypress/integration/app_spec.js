describe('Angular App End-to-End Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display the main form', () => {
    cy.get('app-name-input-form').should('exist');
  });

  it('should show error dialog on empty submission', () => {
    cy.get('app-name-input-form button[type="submit"]').click();
    cy.get('mat-dialog-container').contains('Error').should('exist');
    cy.get('mat-dialog-container button').click();
  });

  it('should show confirmation dialog on form submission', () => {
    cy.get('app-name-input-form input[type="text"]').type('John Doe');
    cy.get('app-name-input-form button[type="submit"]').click();
    cy.get('mat-dialog-container').contains('Confirm Submission').should('exist');
  });

  it('should close confirmation dialog and show error on cancel', () => {
    cy.get('app-name-input-form input[type="text"]').type('John Doe');
    cy.get('app-name-input-form button[type="submit"]').click();
    cy.get('mat-dialog-container button').contains('Cancel').click();
    cy.get('mat-dialog-container').should('not.exist');
    cy.get('mat-dialog-container').contains('Error').should('exist');
    cy.get('mat-dialog-container button').click();
  });

  it('should simulate successful form submission', () => {
    // Mocking the API call
    cy.intercept('POST', '/api/submit-form', { statusCode: 200, body: { success: true } }).as('submitForm');

    cy.get('app-name-input-form input[type="text"]').type('John Doe');
    cy.get('app-name-input-form button[type="submit"]').click();
    cy.get('mat-dialog-container button').contains('Confirm').click();
    cy.wait('@submitForm').its('response.statusCode').should('eq', 200);
  });
});
