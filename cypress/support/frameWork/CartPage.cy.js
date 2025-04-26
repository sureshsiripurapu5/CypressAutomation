require('cypress-xpath');
export class CartPage {
    
    cartButton = "(//span[@class='basket-amount']/span/span[@class='price'])[2]";
    cartProductText = "//div[contains(@class,'item-details')]/strong/a";
    cartProductPrice = "(//span[@class='cart-price']/span)[1]";

    clickOnCartButton(){
        cy.xpath(this.cartButton).click();
    }

    getCartProductText(){
        return cy.xpath(this.cartProductText).invoke('text');
    }

    getCartProductPrice(){
        return cy.xpath(this.cartProductPrice).invoke('text');
    }
}
