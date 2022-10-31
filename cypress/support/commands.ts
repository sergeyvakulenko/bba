/// <reference types="cypress" />

Cypress.Commands.add("checkPostsCount", (count: number) => {
  if (count <= 5) {
    // If there's only one page, check it and that's it.
    cy.get('[data-testid="post"]')
      .should("be.visible")
      .and("have.length", count);
    cy.get('[data-testid="pagination"]').contains("1").should("exist");
    cy.get('[data-testid="pagination"]').contains("2").should("not.exist");
  } else {
    // If there are more than 5 posts — check every page.
    const countOnLastPage = count % 5 || 5;
    const pages = Math.floor(count / 5) + (countOnLastPage === 5 ? 0 : 1);
    for (let i = 1; i <= pages; i++) {
      // The button for the page should exist.
      cy.get('[data-testid="pagination"]').contains(`${i}`).should("exist");
      if (i > 1) {
        // Starting from the page 2 we need to click on it.
        cy.get('[data-testid="pagination"]').contains(`${i}`).click();
      }
      // Calculate the amount of posts on a page and check it.
      const countOnPage = i < pages ? 5 : countOnLastPage;
      cy.get('[data-testid="post"]')
        .should("be.visible")
        .and("have.length", countOnPage);
    }
    // The button for the "next" page should not exist.
    cy.get('[data-testid="pagination"]')
      .contains(`${pages + 1}`)
      .should("not.exist");
  }
});

declare global {
  namespace Cypress {
    interface Chainable {
      checkPostsCount(count: number): Chainable<void>;
    }
  }
}

export {};
