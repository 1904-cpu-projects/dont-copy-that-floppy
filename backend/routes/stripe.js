const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const { models } = require('../index')
const { User, Order } = models

const keySecret = process.env.SECRET_KEY;

const stripe = require('stripe')(keySecret);
const uuid = require('uuid/v4')

router.post('/checkout', async (req, res, next) => {

  let error;
  let status;

  try{
    const {token, product, total} = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    })

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: total * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased ${product.length} items`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            state: token.card.address_state,
            postal_code: token.card.address_zip,
          }
        }
      },
      {
        idempotency_key
      }
    );
    status = "success";

  }catch(error){
    console.log("Error:", error);
    status = "failure";
  }

  res.json({ error, status })

})


module.exports = router
