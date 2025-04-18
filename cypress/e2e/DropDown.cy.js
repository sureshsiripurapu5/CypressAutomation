require('cypress-xpath');

describe('Verify DropDown List', () => {
    it('should select options from dropdown and verify', () => {
        cy.visit('https://www.salesforce.com/in/form/signup/freetrial-salesforce-starter/?d=jumbo1-btn-ft');

        // Select dropdown using XPath
        cy.xpath("//select[@name='UserTitle']").then(($dropdown) => {
            const dropdown = $dropdown[0];

            // Select by value
            cy.wrap(dropdown).select('Operations_Manager_AP');

            // Select by index (Cypress doesn't support index directly, so we use value or text)
            cy.wrap(dropdown).select(dropdown.options[3].value);

            // Select by visible text
            cy.wrap(dropdown).select('Developer / Software Engineer');

            // Verify the selected option
            cy.wrap(dropdown).find(':selected').should('have.text', 'Developer / Software Engineer');

            // Get all options and print their text
            const optionsText = Array.from(dropdown.options).map(option => option.text);
            cy.log(optionsText);
        });
    });
});