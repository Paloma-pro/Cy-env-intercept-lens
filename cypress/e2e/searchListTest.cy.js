/// <reference types="cypress" />

const { categories } = require("../fixtures/categories.json");
const { email, senha } = require("../fixtures/data.json");
const { homePage } = require("../support/pages/home.page");

describe('List Products', () => {

    beforeEach(() => {
        cy.login(email, senha)
    })

    it(`should search product`, () => {
        homePage.openSearchProduct()
        homePage.searchProduct('in')
        homePage.products().should('have.length.greaterThan', 0)

        homePage.products().each(product=>{
            let price = product.find('.price > .woocommerce-Price-amount > bdi').text()
            expect(price).to.contain(price)
        })

        // cy.compareSnapshot(Cypress.currentTest.title, 0)
    });

})


