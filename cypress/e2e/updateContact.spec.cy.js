describe('Update Contact Tests', () => {
  beforeEach(() => {
    cy.login()
  })
    it('Can update a contact', () => {

      let random = Math.floor(Math.random() * 1000) 

      cy.addContact(random)

      cy.contains('Test' + random + ' User').click()
      cy.get('#edit-contact').click()
      cy.get('#firstName').clear().type('Update' + random)
      cy.get('#lastName').clear().type('Person')
      cy.get('#birthdate').clear().type('1977-02-03')
      cy.get('#email').clear().type('51093801@code-gmail.com')
      cy.get('#phone').clear().type('0987654321')
      cy.get('#street1').clear().type('456 Update St')
      cy.get('#street2').clear().type('Suite 4')
      cy.get('#city').clear().type('NYC')
      cy.get('#stateProvince').clear().type('NY') 
      cy.get('#postalCode').clear().type('12345')
      cy.get('#country').clear().type('United States')    
      cy.get('#submit').click()
      cy.get('#return').click()

      cy.contains('Update' + random + ' Person').click()
      cy.get('#firstName').should('contain', `Update${random}`)
      cy.get('#lastName').should('contain', 'Person')
      cy.get('#birthdate').should('contain', '1977-02-03')
      cy.get('#email').should('contain', '51093801@code-gmail.com')
      cy.get('#phone').should('contain', '0987654321')
      cy.get('#street1').should('contain', '456 Update St')
      cy.get('#street2').should('contain', 'Suite 4')
      cy.get('#city').should('contain', 'NYC')
      cy.get('#stateProvince').should('contain', 'NY')
      cy.get('#postalCode').should('contain', '12345')  
      cy.get('#country').should('contain', 'United States')
    })
  //Validation Tests
    it('Returns error when birthdate validation fails', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.addContact(random)
      cy.contains('Test' + random + ' User').click()
      cy.get('#edit-contact').click()
      cy.get('#birthdate').clear().type('11-11-1111')
      cy.get('#submit').click()
      cy.get('#error').should('contain', 'Validation failed: birthdate: Birthdate is invalid')
      cy.get('#cancel').click()
    })
    afterEach(() => {
      cy.deleteContact()
    })     
})