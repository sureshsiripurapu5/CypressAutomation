require('cypress-xpath');


describe('Sauce Demo Login', () => {
    it('should login using valid credentials', () => {
        // Visit the Sauce Demo website
        cy.visit('https://www.saucedemo.com/');

        // Enter username
        cy.xpath("//input[@id='user-name']").type('standard_user');

        // Enter password
        cy.xpath("//input[@id='password']").type('secret_sauce');

        // Click on the login button
        cy.xpath("//input[@id='login-button']").click();
    });
});