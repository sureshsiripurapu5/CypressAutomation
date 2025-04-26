require('cypress-xpath');

export class HomePage {
    
    captchaButton = "(//button[normalize-space()='Accept All Cookies'])[1]";
    productSearch = "//input[@id='search']";
    suggestionProduct = "(//ul[contains(@id,'acList')]/li/a)[1]";
    searchIcon = "//button[@type='submit' and @title='Search']";
    productText = "//span[contains(@class,'item-name')]/a";
    productPrice = "(//span[@class='decimal']/../parent::span)[1]";
    addButton = "(//button[@type='submit' and @title='Add']/span)[1]";

    clickOnCaptchaButton(){
        cy.xpath("(//button[normalize-space()='Accept All Cookies'])[1]").should('be.visible').click();

    }

    clickOnProductSearchBar(){
        cy.xpath(this.productSearch).type('chocolates');
    }

    clickOnSuggestionItem(){
        cy.xpath(this.suggestionProduct).click();
    }

    clickOnSearchIcon(){
        cy.xpath(this.searchIcon).click();
    }

    getProductText(){
        return cy.xpath(this.productText).first().invoke('text');
    }

    getProductPrice(){
        return cy.xpath(this.productPrice).first().invoke('text').then((text) => text.trim());    }

    clickOnAddButton(){
        cy.xpath(this.addButton).click();
    }

    move(){
        cy.xpath(this.productSearch).click();
    }
}
