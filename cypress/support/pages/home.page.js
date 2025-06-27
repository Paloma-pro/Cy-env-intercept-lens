/// <reference types="cypress" />

export const homePage = {
    openMenu(){
        return cy.get('.icon-user-unfollow').click()
    },
    openSearchProduct(){
        cy.get('#primary-menu > .menu-item-536 > .dropdown-toggle').click()
    },
    searchProduct(product){
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .tbay-search').type(product)
    },
    products(){
        return cy.get('#ui-id-1')
    },
    openCategoriesFilter(){
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .select-category > .SumoSelect > .CaptionCont').click()
    },
    categories(){
        return cy.get('[data-testid^="search-category-"]')
    },
    addProduct() {
        cy.get('#ui-id-1 > :nth-child(1)').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.single_add_to_cart_button').click()
    },
    openCart() {
        cy.get('.woocommerce-message > .button').click() 
    },
    openCart2() {
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
    },
    modifyQuantity() {
        cy.get('.quantity > .input-text').clear()
        cy.get('.quantity > .input-text').type(5)
        cy.get('.pull-right > .btn').click()
    }
}