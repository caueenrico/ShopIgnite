import  Stripe  from "stripe";

//aqui eu estou me conectando com a api do stripe

//Stripe(chave secreta,{versão recomendada, identificaçao})
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
  appInfo:{
    name: 'Ignite Shop'
  }
})