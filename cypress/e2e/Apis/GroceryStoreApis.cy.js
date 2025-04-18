describe('Simple Grocery Store API Tests', () => {
  
  const baseUrl = 'https://simple-grocery-store-api.glitch.me'; // Base URL of the API

  it('TC001 - Check API status', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/status`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('status', 'UP');
    });
  });

  it('TC002 - Get all products with filters', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/products?category=coffee&results=2`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.lte(2);
      response.body.forEach((product) => {
        expect(product).to.have.property('category', 'coffee');
      });
    });
  });

  it('TC003 - Get single product by ID', () => {
    const productId = 4643; // Replace with a valid product ID
    cy.request({
      method: 'GET',
      url: `${baseUrl}/products/${productId}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', productId);
    });
  });

  it('TC004 - Create a new cart', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/carts`,
      body: {}
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('cartId');
    });
  });

  it('TC005 - Add an item to cart', () => {
    const cartId = 'your-cart-id'; // Replace with a valid cart ID
    const productId = 4643; // Replace with a valid product ID
    cy.request({
      method: 'POST',
      url: `${baseUrl}/carts/${cartId}/items`,
      body: { productId }
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it('TC006 - Register new API client', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api-clients`,
      body: {
        clientName: 'TestClient',
        clientEmail: 'test@example.com'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('accessToken');
    });
  });

  it('TC007 - Create a new order', () => {
    const cartId = 'your-cart-id'; // Replace with a valid cart ID
    cy.request({
      method: 'POST',
      url: `${baseUrl}/orders`,
      body: {
        cartId,
        customerName: 'John Doe'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('orderId');
    });
  });

});