require('cypress-xpath');

describe('SauceDemo Login Test', () => {
    it('should login and verify the title', () => {
        // Visit the SauceDemo website
        cy.visit('https://www.saucedemo.com/');

        // Enter username
        cy.xpath("//input[@id='user-name']").type('standard_user');

        // Enter password
        cy.xpath("//input[@id='password']").type('secret_sauce');

        // Click on login button
        cy.xpath("//input[@id='login-button']").click();

        // Fetch the text of the title and store in a variable
        cy.xpath("//span[@class='title']").invoke('text').then((actualTitle) => {
            // Assert the title equals "Products"
            expect(actualTitle).to.equal('Products');
        });
    });
});