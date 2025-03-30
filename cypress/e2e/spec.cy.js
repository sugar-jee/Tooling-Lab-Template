describe('input, dropdown, history', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    //types your name
    cy.get('.name').type('Georgie');

    //selects a choice from the dropdown
    cy.get('dropdown').select('choice_1')

    // confirms that the history log generated contains:
    // the right number of tries
    // the right name
    cy.get('history').should('have.value', 'Georgie')
    cy.get('history').should('have.value', 'try_1')
  })
})