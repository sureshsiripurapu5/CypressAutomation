describe('REST API Automation - Complete Flow from Bruno', () => {
    const baseUrl = 'https://api.restful-api.dev/objects';
    let createdId = null;
  
    it('GET all objects', () => {
      cy.request('GET', baseUrl).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });
  
    it('GET objects by IDs (3 & 5)', () => {
      cy.request('GET', `${baseUrl}?id=3&id=5`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });
  
    it('GET a single object (ID: 7)', () => {
      cy.request('GET', `${baseUrl}/7`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', '7');
      });
    });
  
    it('POST - Create a new object', () => {
      const requestBody = {
        name: "Apple MacBook Pro 16",
        data: {
          year: 2019,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB"
        }
      };
  
      cy.request({
        method: 'POST',
        url: baseUrl,
        body: requestBody,
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {
        expect(response.status).to.eq(200);
        createdId = response.body.id;
        cy.log('Created ID:', createdId);
      });
    });
  
    it('PUT - Full update object', () => {
      const fullUpdate = {
        name: "Apple MacBook Pro 16",
        data: {
          year: 2019,
          price: 2049.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
          color: "silver"
        }
      };
  
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/${createdId}`,
        body: fullUpdate,
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.price).to.eq(2049.99);
      });
    });
  
    it('PATCH - Partial update object', () => {
      const partialUpdate = {
        name: "Apple MacBook Pro 16 (Updated Name)"
      };
  
      cy.request({
        method: 'PATCH',
        url: `${baseUrl}/${createdId}`,
        body: partialUpdate,
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.contain('Updated Name');
      });
    });
  
    it('DELETE - Delete the created object', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/${createdId}`
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Deleted ID:', createdId);
      });
    });
  });
  