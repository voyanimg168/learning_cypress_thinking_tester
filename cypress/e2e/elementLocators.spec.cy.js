describe('Element locator practice', () => {
    it('Can locate an element 6 different ways', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
        //locate an element by ID
        cy.get('#email').type('51093801@code-gmail.com')
        //locate an element by type
        cy.get("[type = 'password']").type('7654321')
        //locate an element by text
        cy.contains('Submit').click()
        //locate an element by class
        cy.get('.logout').click()
        //locate an element by CSS selector
        cy.get('input').first().type('51093801@code-gmail.com')

        //locate an element by XPath (XML-Path language) => not used in Cypress but is used in other testing frameworks
        //cy.get('//form/p[2]/input').type('7654321')

        //locate an element by automation ID
        //cy.get('[data-cy="submit"]').click()
    })
}) 