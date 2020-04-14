/// <reference types="Cypress" />

describe('App Home Page', () => {
  it('Login and find featured content', () => {
    cy.request('POST', 'https://api.dev.zendy.io/auth/auth', { "phoneNumber": "+971122222222", "password": "Password1234" })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
    cy.visit("https://app.dev.zendy.io/");
    cy.get('.MuiCardMediaroot-0-1-150').should('have.length',1)

  })

  it('Login, search for a get the first card on the search page', () => {
    cy.request('POST', 'https://api.dev.zendy.io/auth/auth', { "phoneNumber": "+971122222222", "password": "Password1234" })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
    cy.visit("https://app.dev.zendy.io/");
    cy.get('[data-test=advanced-search-text-input] > .MuiInputBaseinput-0-1-40').type('a');
    cy.get('.css-58mwrr-rowContainer > .MuiButtonBaseroot-0-1-7').click();
    cy.wait(2000);
    cy.get('.css-yvxfk9-search-result-root').find('[data-test="search-result-0"]').should('have.length', 1);
  })

  it('Login, search for test open the first card', () => {
    cy.request('POST', 'https://api.dev.zendy.io/auth/auth', { "phoneNumber": "+971122222222", "password": "Password1234" })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
    cy.visit("https://app.dev.zendy.io/");
    cy.get('[data-test=advanced-search-text-input] > .MuiInputBaseinput-0-1-40').type('test');
    cy.get('.css-58mwrr-rowContainer > .MuiButtonBaseroot-0-1-7').click();
    cy.wait(2000);
    cy.get('.css-yvxfk9-search-result-root').find('[data-test="search-result-0"]').click();
    cy.get('[data-test="search-result-0"]').contains('Read').click();

  })

  it('Login, go to search page, search test, aplly peer Reviewed filter, check results ', () => {
    cy.request('POST', 'https://api.dev.zendy.io/auth/auth', { "phoneNumber": "+971122222222", "password": "Password1234" })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
    cy.visit("https://app.dev.zendy.io/search");
    cy.get('[type="search"]').type('test');
    cy.get('.css-1n5o6em-root').contains('Search').click();
    cy.wait(2000);
    cy.get('[data-test="filters-container"]]').find('.css-jeurqa-filter-item-container').click();
    cy.get('[data-test="search-result-0"]').contains('Read').click();

  })
})