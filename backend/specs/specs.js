const app =require('supertest')(require('../server'));
const { expect } = require('chai');
const { db } = require('../index');

describe('Post Route', () => {
  beforeEach(async () => await db.sync({ force: true }));
  it('Should be able to Add New Products', async () => {
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
