const app = require('supertest')(require('../server'));
const { expect } = require('chai');
const { db, models } = require('../index');
const { User } = models;
const saltHash = require('../utils')

describe('User Specs', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
    await User.create({
      firstName: 'Test',
      lastName: 'Spec',
      email: 'test@spec.com'
    });
  });
  describe('GET SPECS', () => {
    it('GET All USERS', () => {
      return app
        .get('/api/users')
        .expect(200)
        .then(res => {
          expect(res.body.length).to.greaterThan(0);
        });
    });
  });
  });

  describe('POST SPECS - USER', () => {
    it('SHOULD BE ABLE TO ADD A NEW USER', () => {
      return app
        .post('/api/users')
        .send({
          firstName: 'Testy',
          lastName: 'Specy',
          email: 'testy@specy.com',
          password: 'password'
        })
        .expect(201)
        .then(res => {
          expect(res.body.firstName).to.equal("Testy")
          expect(res.body.lastName).to.equal('Specy')
          expect(res.body.email).to.equal('testy@specy.com')
          expect(res.body.password).to.equal(saltHash('password'))
        })
    });
    it('ALL EMAILS SHOULD BE UNIQUE', () => {
      return app.post('/api/users').send({
        firstName: 'Test',
        lastName: 'Spec',
        email: 'test@spec.com'
      }).expect(401)
      .then(res => expect(res.error.text).to.equal('Account Already Exists'))
    })
  })

