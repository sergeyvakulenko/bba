describe("Search", () => {
  before(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  it("mounts", () => {
    cy.get('[data-testid="search-bar"]').should("exist").and("be.visible");
    cy.get('[data-testid="search-select"]').should("exist").and("be.visible");
  });

  it("allows to search by post content", () => {
    // facere search term yields 2 posts
    cy.get('[data-testid="search-bar"]').type("facere");
    cy.get('[data-testid="search-bar-container"]').find("button").click();
    cy.checkPostsCount(2);

    // sunt search term yields 6 posts
    cy.get('[data-testid="search-bar"]').clear().type("sunt");
    cy.get('[data-testid="search-bar-container"]').find("button").click();
    cy.checkPostsCount(6);

    cy.get('[data-testid="search-bar"]').clear().type("{enter}");
  });

  it("allows to search by author id OR author name", () => {
    // I'm querying the dropdown via .ant-select-dropdown because I use Antd for prototyping.
    // In real working situation I'd have a data-testid tag with unique id for each dropdown.
    cy.get('[data-testid="search-select"]').type("1");
    cy.get(".ant-select-dropdown").contains("Antonette").should("not.exist");
    cy.get(".ant-select-dropdown")
      .contains("Bret")
      .should("exist")
      .and("be.visible")
      .click();
    cy.checkPostsCount(10);

    cy.get('[data-testid="search-select"]').click().type("Antonette");
    cy.get(".ant-select-dropdown").contains("Bret").should("not.exist");
    cy.get(".ant-select-dropdown")
      .contains("Antonette")
      .should("exist")
      .and("be.visible")
      .click();
    cy.checkPostsCount(10);
  });

  it("allows to search by author AND post content", () => {
    cy.get('[data-testid="search-select"]').click().type("Bret");
    cy.get(".ant-select-dropdown")
      .contains("Bret")
      .should("exist")
      .and("be.visible")
      .click();

    cy.get('[data-testid="search-bar"]').clear().type("sunt");
    cy.get('[data-testid="search-bar-container"]').find("button").click();

    // This combination of author "Bret" and search term "sunt" yields 4 posts.
    cy.checkPostsCount(4);
  });
});
