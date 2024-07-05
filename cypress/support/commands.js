// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
<<<<<<< HEAD


Cypress.Commands.add('createUser', (username, email, password) => {
    cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/register', {
        username: username,
        email: email,
        password: password
    }).then(response => {
        expect(response.status).to.eq(201);
        cy.log('User created:', response.body);
    });

    Cypress.Commands.add('login', (email, password) => {
        // implémentation de la commande personnalisée ici
        cy.visit('/login');
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(password);
        cy.get('button[type=submit]').click();
        cy.get('@authToken').should('not.be.null').then(token => {
          cy.log('Authenticated token:', token);
        });
      });
      
});



=======
import 'cypress-file-upload'
require('cypress-downloadfile/lib/downloadFileCommand')
>>>>>>> 5586c84 (plugins-example)
