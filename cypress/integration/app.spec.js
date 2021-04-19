/// <reference types="cypress" />

context('Cart testing', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Set item count to 0. Removes pineapple, checks cart amount', () => {
    cy.get('[data-testid="6"]').find('.set-amount').click()
    cy.get('[data-test="cart-amount"]').should('contain', '2')
  })

  it('Add item to cart. Set Pineapple value to 8 and check cart amount', () => {
    cy.get('.product-item[data-testid="6"]').find('.amount').clear().type('6')
    cy.get('[data-testid="6"]').find('.set-amount').click()
    cy.get('[data-test="cart-amount"]').should('contain', '8')
  })

  it('Remove item from cart. Removes Pineapples from the cart and checks cart amount', () => {
    cy.get('.cart-item[data-testid="6"]').find('.remove').click()
    cy.get('[data-test="cart-amount"]').should('contain', '2')
  })

});

