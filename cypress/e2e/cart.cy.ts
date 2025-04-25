/// <reference types="cypress" />

context('Cart testing', () => {

    before(() => {
        cy.visit('http://localhost:3000/cart')
    })

    beforeEach(() => {
        cy.visit('http://localhost:3000/cart')
    })

    it('Set default cart content', () => {
        cy.get('[data-cy="cart-total"]')
            .find('[data-cy="total-price"]')
            .invoke('text')
            .as('totalPrice')

        cy.wait(1000)

        // Later in the test
        cy.get('@totalPrice').then((totalPrice) => {
            cy.log(`Total price is: ${totalPrice}`)

            cy.get('[data-cy="set-default-button"]').as('defaultBtn');
            cy.get('@defaultBtn').click();
    
            cy.get('[data-cy="cart-total"]')
                .find('[data-cy="total-price"]')
                .should('contain', `${totalPrice}`)
        })
    })

    it('Clear the cart contents', () => {
        cy.get('[data-cy="clear-cart-button"]').as('clearBtn');
        cy.get('@clearBtn').click();

        cy.get('[data-cy="cart-total"]')
            .find('[data-cy="total-price"]')
            .should('contain', '0')
    })

    it('Add random test item to the cart', () => {
        cy.get('[data-cy="cart"] .cart-item').then(($cartItems) => {
            const initialCount = $cartItems.length

            cy.get('[data-cy="add-test-item-button"]').click();

            cy.get('[data-cy="cart"] .cart-item').should('have.length', initialCount + 1)
        })
    })

    it('Add 3 random test items to the cart', () => {
        cy.get('[data-cy="cart"] .cart-item').then(($cartItems) => {
            const initialCount = $cartItems.length

            cy.get('[data-cy="add-test-item-button"]').click().click().click();

            cy.get('[data-cy="cart"] .cart-item').should('have.length', initialCount + 3)
        })
    })
});