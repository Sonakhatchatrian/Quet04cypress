describe('Notes API User login test', () => {
    it('User login success', () => {
      cy.fixture('userData').then((user) => {
        cy.request({
          url: 'https://practice.expandtesting.com/notes/api/users/login',
          method: 'POST',
          body: {
            email: user.email,
            password: user.password
          }
        })
        .then((response) => {
          cy.log('Response Body:', JSON.stringify(response.body));
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('success', true);
        });
      });
    });
    it('Login with incorrect user data - Failure Case', () => {
        const incorrectUserData = {
          email: "wrongemail@example.com",
          password: "wrongpassword"
        };
        cy.request({
          url: 'https://practice.expandtesting.com/notes/api/users/login',
          method: 'POST',
          body: incorrectUserData,
          failOnStatusCode: false
        })
        .then((response) => {
          cy.log('Response Body:', JSON.stringify(response.body));
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('success', false);
        });
      });
    });