import { HomePage } from '../../support/frameWork/HomePage.cy.js';
import { CartPage } from '../../support/frameWork/CartPage.cy.js';

describe('PoundLand Automation Tests', () => {

    const homePage = new HomePage();
    const cartPage = new CartPage();

    beforeEach(() => {
         // Ignore all uncaught JS exceptions from the site
         Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('https://www.poundland.co.uk/');
    });

    it('Verifying Product Search and Add to Cart Functionality', () => {
        homePage.clickOnCaptchaButton();
        homePage.clickOnProductSearchBar();
        cy.wait(3000);
        homePage.clickOnSearchIcon();
        
        homePage.getProductText().then((searchProductText) => {
            homePage.getProductPrice().then((searchProductPrice) => {
                
                cy.log('Searched Product Text:', searchProductText);
                cy.log('Searched Product Price:', searchProductPrice);

                homePage.clickOnAddButton();
                cy.wait(5000);

                cartPage.clickOnCartButton();

                cartPage.getCartProductText().then((addedProductText) => {
                    cartPage.getCartProductPrice().then((addedProductPrice) => {

                        cy.log('Cart Product Text:', addedProductText);
                        cy.log('Cart Product Price:', addedProductPrice);

                        expect(searchProductText.trim()).to.eq(addedProductText.trim());
                        expect(searchProductPrice.trim()).to.eq(addedProductPrice.trim());

                    });
                });
            });
        });

    });

});
