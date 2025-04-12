describe('SauceDemo Login Test', () => {
    it('should display an error message for invalid login', () => {
        // Visit the SauceDemo website
        cy.visit('https://www.saucedemo.com/v1/');

        // Enter username
        cy.get('#user-name').type('suresh');
        cy.wait(1000);

        // Enter password
        cy.get('input[placeholder="Password"]').type('suresh@123');
        cy.wait(1000);

        // Click the login button
        cy.get('#login-button').click();

        // Verify the error message
        cy.get('h3').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
});