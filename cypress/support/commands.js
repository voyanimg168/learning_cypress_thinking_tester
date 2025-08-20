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

Cypress.Commands.add('login', (email, password) => {
    cy.visit(Cypress.env('url')) // Use environment variable for URL
    cy.get('#email').type(Cypress.env('username')) // Use environment variable for username
    cy.get('#password').type(Cypress.env('password')) // Use environment variable for password
    cy.get('#submit').click()
})
Cypress.Commands.add('addContact', (random) => {
    cy.get('#add-contact').click()
    cy.get('#firstName').type('Test' + random)
    cy.get('#lastName').type('User')
    cy.get('#birthdate').type('1977-04-05')
    cy.get('#email').type('51093801@code-gmail.com')
    cy.get('#phone').type('1234567890')
    cy.get('#street1').type('123 Test St')
    cy.get('#street2').type('Apt 4')
    cy.get('#city').type('Test City')
    cy.get('#stateProvince').type('CA')
    cy.get('#postalCode').type('90210')
    cy.get('#country').type('United States')
    cy.get('#submit').click()
})
Cypress.Commands.add('deleteContact', () => {
    cy.get('#delete').click()
    cy.on('window:confirm', () => true) // Confirm deletion
})