const app = require('supertest')(require('../server'));
const { expect } = require('chai');
const { db, models } = require('../index');
const { User, Order } = models;

describe('Order Specs', () => {
  beforeEach(async () => {
    await db.sync({force: true})
    await User.create({
      firstName: 'Test',
      lastName: 'Spec',
      email: 'test@spec.com',
      password: 'test'
    });
  });
  describe('Get All Orders', () => {
    it('Expect To All Orders by User', async () => {
      const user = await User.findOne({
        where: {
          email: 'test@spec.com'
        }
      });
      await Order.create({
        userId: user.id,
        items: JSON.stringify([{
          name: 'Old Apple Product',
          price: 10.0,
          quantity: 6
        },
        {
          name: 'New Apple Product',
          price: 100.0,
          quantity: 6
        }
      ]),
      })
      return app.get(`/api/users/${user.id}/orders`)
      .expect(200)
      .then(res => {
        const items = res.body.map(b => JSON.parse(b.items))
        expect(items[0].length).to.equal(2)
      })

      })
    });
  });
