const request = require('supertest')
const app = require('./server')
const { expect }  = require('chai')
const agent = request.agent(app);
const { db } = require('./index')

describe("Post Route", () => {
  beforeEach(async () => await db.sync({ force: true }) )
  it("Should be able to Add New Products", async () => {
    const res = await agent
      .post("/api/products")
      .send({
        name: "Old Apple Product", price: 10.00, brand: "Blakes", description: "Blakes Test Sec", quantity: 6})
      expect(res.status).to.equal(201)
  })
})
