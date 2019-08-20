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
    .expect(401)
    .then(response => {
      expect(response.error.text).to.equal('Please Sign In to Access this Page')
    })
  });
});
