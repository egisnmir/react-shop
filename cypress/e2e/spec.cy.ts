/// <reference types="cypress" />

context('Store testing', () => {

    before(() => {
        cy.visit('http://localhost:3000')  
    })

    it('Go to products page', () => {
        cy.visit('http://localhost:3000/products')
    })

    it('Go to cart page', () => {
        cy.visit('http://localhost:3000/cart')
    })

    it('Go to favorites page', () => {
        cy.visit('http://localhost:3000/favorites')
    })

    it('Go to product with id=1 page', () => {
        cy.visit('http://localhost:3000/product-details/1')
    })

    it('Go to product with id=2 page', () => {
        cy.visit('http://localhost:3000/product-details/2')
    })
});
