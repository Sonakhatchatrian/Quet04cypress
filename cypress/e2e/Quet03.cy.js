describe("control example json", () => {
  beforeEach(() => {
    cy.fixture("userData.json").as("data");
  });
  it("check object example", () => {
    cy.get("@data").then((data) => {
      cy.wrap(data).should("have.property", "username");
      cy.wrap(data).should("have.property", "email");
      cy.wrap(data).should("have.property", "password");
    });
    cy.get("@data").then(({ email, password, username }) => {
      cy.wrap(email).should("be.a", "string");
    });
    cy.get("@data").then((data) => {
      cy.request({
        url: "https://practice.expandtesting.com/notes/api/users/login",
        method: "POST",
        body: {
          email: data.email,
          password: data.password,
        },
      })
        .its("body.success")
        .should("eql", true);
    });
  });
});

