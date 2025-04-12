require('cypress-xpath');


describe('Handling Normal Alert with OK Button', () => {
    it('should handle a normal alert and assert its message', () => {
        // Visit the URL
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        // Maximize the browser window
        cy.viewport('macbook-15');

        // Click the button to trigger the alert
        cy.xpath("//button[text()='Click for JS Alert']").click();

        // Handle the alert and assert its message
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('I am a JS Alert');
        });
    });
});