describe('AppComponent with Router', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to book details page on successful search', () => {
    cy.intercept('GET', '/api/books/search*', {title: 'Test Book', id: 123}).as('getBookDetails');

    cy.get('[data-testid="search-box"]').type('Test Book{enter}');

    cy.wait('@getBookDetails');

    cy.url().should('include', '/book-details/123');

    cy.contains('Test Book').should('be.visible');
  });

  it('navigates to error page on unsuccessful search', () => {
    cy.intercept('GET', '/api/books/search*', {statusCode: 404}).as('getBookError');

    cy.get('[data-testid="search-box"]').type('Unknown Book{enter}');

    cy.wait('@getBookError');

    cy.url().should('include', '/error');
  });
});
