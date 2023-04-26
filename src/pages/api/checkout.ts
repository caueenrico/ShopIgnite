import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const {priceId} = req.body //aqui ele estou pegando o id do preço vindo la do front-end

  if(req.method !== 'POST'){
    return res.status(405).json({error: 'Method not allowed'})
  }

  if(!priceId) {
    return res.status(400).json({error: 'price not found'})
  }

  const succesURL = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cacelURL = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: succesURL,
    cancel_url: cacelURL,

    mode:'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}