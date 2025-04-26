require('cypress-xpath');
export class SeleniumActions {

    enterValue(xpath, value){
        cy.xpath(xpath).type(value);
    }

    clickOnElement(xpath){
        cy.xpath(xpath).click();
    }

    getTextMessage(xpath){
        return cy.xpath(xpath).invoke('text');
    }

    moveToElement(xpath){
        cy.xpath(xpath).trigger('mouseover');
    }

}
