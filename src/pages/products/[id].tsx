import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/products"

interface ProductProps{
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string
  }
}

export default function Products({product}: ProductProps){
  //se eu quiser fazer um checkout interno primeiro faria o codigo abaxio (1c -> 2c)
  //const router = useRouter()

  const [isCreateCheckoutSession, setCreateCheckoutSession] = useState(false)

  const { isFallback } = useRouter()

  if(isFallback){
    return <p>loading...</p>
  }

  console.log(product)

  async function handleByProduct (){
    try{
      setCreateCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data

      //(2c) e aqui envio para onde eu quero
      //router.push('/checkout')
      
      //utilizo o codigo abaixo se quero redirecionar para um checkout externo 
      window.location.href = checkoutUrl
    }catch(error){
      setCreateCheckoutSession(false)

      //o melhor seria conecta com alguma ferramenta de observabilidade (Datadog / Sentry)

      alert('falha ao redirecionar para o checkOut')
    }
  }
  return(
    <>
      <Head>
        <title>{product.name} | ignite shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt=''/>

        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>R$ {product.price} </span>

          <p>{product.description}</p>

          <button disabled={isCreateCheckoutSession} onClick={handleByProduct}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}
//utilizar o getStaticPaths é necessario para renderizaçao das paginas (produtos) dinamicas 
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: { id: 'prod_N2MyC4xny1SB6C'} } //aqui eu coloco os produtos para que renderizem mais rapidos
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps <any, { id: string }> = async ({ params }) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId,{
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price //isso aqui ainda para pegar o preço

  return{
    props:{
      product:{
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        }).format(price.unit_amount!/100), //dividindo o preço por 100 porque ele vem em centavos
        description: product.description,
        defaultPriceId: price.id //isso aqui é para pegar o id do preço para direcionar para o checkout
      }
    },
    revalidate: 60 * 60 * 1,
  }

  
}
