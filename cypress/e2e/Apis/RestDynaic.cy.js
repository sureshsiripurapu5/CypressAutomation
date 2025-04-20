describe('REST API Test Suite - Converted from Bruno', () => {

    it('1. Create Object (POST)', () => {
      cy.request({
        method: 'POST',
        url: 'https://api.restful-api.dev/objects',
        body: {
          name: 'Apple MacBook Pro 16',
          data: {
            year: 2019,
            price: 1849.99,
            'CPU model': 'Intel Core i9',
            'Hard disk size': '1 TB'
          }
        }
      }).then((response) => {
        expect(response.status).to.eq(200); // or 201 if applicable
        expect(response.body.name).to.eq('Apple MacBook Pro 16');
        Cypress.env('createdId', response.body.id);
      });
    });
  
    it('2. Get All Objects (GET)', () => {
      cy.request('https://api.restful-api.dev/objects').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });
  
    it('3. Get Single Object by ID (GET)', () => {
      cy.request('https://api.restful-api.dev/objects/7').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', '7');
      });
    });
  
    it('4. Get Objects by Multiple IDs (GET with query)', () => {
      cy.request('https://api.restful-api.dev/objects?id=3&id=5').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });
  
    it('5. Full Update Object (PUT)', () => {
      const id = Cypress.env('createdId');
      expect(id).to.exist;
  
      cy.request({
        method: 'PUT',
        url: `https://api.restful-api.dev/objects/${id}`,
        body: {
          name: 'Apple MacBook Pro 16',
          data: {
            year: 2019,
            price: 2049.99,
            'CPU model': 'Intel Core i9',
            'Hard disk size': '1 TB',
            color: 'silver'
          }
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('6. Partial Update Object (PATCH)', () => {
      const id = Cypress.env('createdId');
      expect(id).to.exist;
  
      cy.request({
        method: 'PATCH',
        url: `https://api.restful-api.dev/objects/${id}`,
        body: {
          name: 'Apple MacBook Pro 16 (Updated Name)'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('7. Delete Object (DELETE)', () => {
      const id = Cypress.env('createdId');
      expect(id).to.exist;
  
      cy.request({
        method: 'DELETE',
        url: `https://api.restful-api.dev/objects/${id}`
      }).then((response) => {
        expect(response.status).to.be.oneOf([200, 204]);
      });
    });
  
  });
  