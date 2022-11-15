/// <reference types="cypress" />

context('Store testing', () => {

    before(() => {
        cy.visit('http://localhost:3000')  
    })

    beforeEach(() => {
        
    })

    it('Go to products page', () => {
        cy.wait(2000)
        cy.visit('http://localhost:3000/products')
    })

    it('Go to cart page', () => {
        cy.wait(2000)
        cy.visit('http://localhost:3000/cart')
    })

    it('Go to favorites page', () => {
        cy.wait(2000)
        cy.visit('http://localhost:3000/favorites')
    })

    it('Go to product with id=1 page', () => {
        cy.wait(2000)
        cy.visit('http://localhost:3000/product-details/1')
    })
  
    // it('Set item count to 0. Removes Brocolli, checks cart amount', () => {
    //   cy.get('[data-testid="4"]').find('.amount').clear().type('5')
    //   cy.get('[data-testid="4"]').find('.set-amount').click()
    //   cy.get('[data-testid="4"]').find('.amount').should('contain', '50')
    // })
  
    // it('Add item to cart. Set Pineapple value to 8 and check cart amount', () => {
    //   cy.get('.product-item[data-testid="6"]').find('.amount').clear().type('6')
    //   cy.get('[data-testid="6"]').find('.set-amount').click()
    //   cy.get('[data-test="cart-amount"]').should('contain', '8')
    // })
  
    // it('Remove item from cart. Removes Pineapples from the cart and checks cart amount', () => {
    //   cy.get('.cart-item[data-testid="6"]').find('.remove').click()
    //   cy.get('[data-test="cart-amount"]').should('contain', '2')
    // })
  });
  