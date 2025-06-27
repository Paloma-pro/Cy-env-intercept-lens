/// <reference types="cypress" />

const { email, senha } = require("../fixtures/data.json");
const { homePage } = require("../support/pages/home.page");


describe('Simulação e Validação de Operações do Carrinho de Compras', () => {

    beforeEach(() => {
        cy.login(email, senha)
    })

    it('deve adicionar um item ao carrinho', () => {

        cy.intercept('POST', '/wp-admin/admin-ajax.php', {
            statusCode: 200,
        }).as('addItem');

        homePage.openSearchProduct()
        homePage.searchProduct('in')
        homePage.addProduct()
        homePage.openCart()

        cy.get('.product-name > a').should('contain.text', 'Ingrid')

        // cy.compareSnapshot(Cypress.currentTest.title, 1)
    });

    it('deve atualizar a quantidade de um item no carrinho', () => {

        cy.intercept('POST', '**/carrinho/', {
            statusCode: 200,
        }).as('updateItemQuantity');

        homePage.openCart2()
        homePage.modifyQuantity()

        // cy.get('.woocommerce-message').should('contain.text', 'Carrinho atualizado.')
    });

    it('deve remover um item do carrinho', () => {

        cy.intercept('GET', '/carrinho/?remove_item=1', {
            statusCode: 200,
        }).as('removeItem');

        homePage.openCart2()
        cy.get('.remove > .fa').click();

        cy.get('.woocommerce-message').should('contain.text', 'removido')
    });


});