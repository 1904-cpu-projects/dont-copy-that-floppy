const app =require('supertest')(require('../server'));
const { expect } = require('chai');

describe('Post Route - PRODUCTS', () => {
  it('Should be able to Add New Products', () => {
   return app.post('/api/products').send({
      name: 'Old Apple Product',
      price: 10.0,
      brand: 'Blakes',
      description: 'Blakes Test Sec',
      quantity: 6
    })
    .expect(201)
    .then(response => {
      expect(response.body.name).to.equal('Old Apple Product')
    })
  });
});
