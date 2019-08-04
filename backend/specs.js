const request = require('supertest')
const app = require('./server')
const { expect }  = require('chai')
const agent = request.agent(app);

describe("Post Route", () => {
  it("Should be able to Add New Products", async () => {
    const response = await agent
      .post("/api/products")
      .send({products: {
        name: "Old Apple Product", price: 10.00, brand: "Blakes", description: "Blakes Test Sec", quantity: 6}})
        console.log(response)
      expect(response.status).to.equal(201)
  })
})
