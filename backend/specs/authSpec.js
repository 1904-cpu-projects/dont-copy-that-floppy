const app = require('supertest')(require('../server'));
const { expect } = require('chai');
const {db, models} = require('../index');
const { User } = models;

describe('Authentication Specs', () => {
  beforeEach(async () => {
    await db.sync({ force: true});
    await User.create({
      firstName: 'Auth',
      lastName: 'Tester',
      email: 'testAuth@spec.com',
      password: 'password'
    });
  });
  describe('Login', () => {
    it('Login with correct credentials', () => {
      return app
        .post('/login')
        .send({ email: 'testAuth@spec.com', password: 'password' })
        .expect(201)
    })
    it('Rejects incorrect password', () => {
      return app
        .post('/login')
        .send({ email: 'testAuth@spec.com', password: 'admin' })
        .expect(203)
        .then(res => {
          expect(res.text).to.equal('Unauthorized: Wrong Password')
      })
    })
    it('Rejects login if account does not exist', () => {
      return app
        .post('/login')
        .send({ email: 'letMeIn@hackguy.com', password: 'password' })
        .expect(203)
        .then(res => {
          expect(res.text).to.equal('Unautorized: Please create an Account')
        })
    })
    it('Rejects login if a form field empty', () =>{
      return app
        .post('/login')
        .send({ email: '', password: 'password' })
        .expect(203)
        .send({ email: 'hii@me.com' })
        .expect(203)
        .send({})
        .expect(203)
    })
  })

  describe('Logout', () => {
    it('User can logout', () => {
      return app
        .delete('/login')
        .expect(204)
        .done
    })
  })
})
