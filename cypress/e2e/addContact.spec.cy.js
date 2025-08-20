describe('Add Contact Tests', () => {
  before(() => {
    cy.log('This is running in my before hook') 
  })
    it('Can add a new contact', () => {

      let random = Math.floor(Math.random() * 1000) 

      cy.login()
      cy.addContact(random)

      cy.contains('Test' + random + ' User').click()
      cy.get('#firstName').should('contain', `Test${random}`)
      cy.get('#lastName').should('contain', 'User')
      cy.get('#birthdate').should('contain', '1977-04-05')
      cy.get('#email').should('contain', '51093801@code-gmail.com')
      cy.get('#phone').should('contain', '1234567890')
      cy.get('#street1').should('contain', '123 Test St')
      cy.get('#street2').should('contain', 'Apt 4')
      cy.get('#city').should('contain', 'Test City')
      cy.get('#stateProvince').should('contain', 'CA')
      cy.get('#postalCode').should('contain', '90210')  
      cy.get('#country').should('contain', 'United States')

      cy.deleteContact()
    })
    //Validation Tests
    it('Returns an error when required field is missing', () => {
      cy.login()
      cy.get('#add-contact').click()
      cy.get('#firstName').type('Prunella')
      cy.get('#submit').click() 
      cy.get('#error').should('contain', 'Contact validation failed: lastName')

    })
  after(() => {
    cy.log('This is running in my after hook') 
  })
})