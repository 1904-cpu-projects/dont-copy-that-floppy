const app = require('supertest')(require('../server'));
const { expect } = require('chai');
const { db, models } = require('../index');
const { User } = models;

describe('Order Specs', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
    await User.create({
      firstName: 'Test',
      lastName: 'Spec',
      email: 'test@spec.com'
    });
  });
  describe('Get All Orders', () => {
    it('Expect To All Orders by User', async () => {
      const user = await User.findOne({
        where: {
          email: 'test@spec.com'
        }
      });
      return app.get(`/api/users/${user.id}/orders`)
      .expect(200)
      .then(res => {
        expect(Array.isArray(res.body)).to.equal(true)
      })
    });
  });
});
