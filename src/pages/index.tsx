import Image from "next/image"
import { styled } from "../styles"
import { HomeContainer, Product } from "../styles/pages/home"

import {useKeenSlider} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe"
import { GetServerSideProps, GetStaticProps } from "next"
import Stripe from "stripe"
import Link from "next/link"
import Head from "next/head"

interface HomeProps {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: number
  }[] //colocado esse array no final, pois eu estou querendo um array de produtos
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head> 

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map(products => {
          return(
            <Product href={`/products/${products.id}`} key={products.id} className="keen-slider__slide" prefetch={false}> {/* adicionado o 'prefetch={false}' para o next nao ficar gerando paginas atoa e sobrecarregando o servidor*/}
                 <Image src={products.imageUrl} width={520} height={400} alt=''/> {/*lembrando que aqui para eu renderizar essa imagem, precisei fazer uma config la no next.config.js */}
              <footer>
                <strong>{products.name}</strong>
                <span>R$ {products.price}</span>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

//CONCEITO DE SSG (PAGINA ESTATICA COM O TEMPO SETADO PARA ATUALIZAÇÃO, DEIXANDO MAIS PERFORMATICO)

// o codigo que eu colocar aqui dentro nao vai estar disponivel para o usuario final 
export const getStaticProps: GetStaticProps = async () => {
  // buscando a lista de produtos cadastrada no stripe
  const response = await stripe.products.list({
    expand: ['data.default_price']//um conceito do stripe que nao entendi muito bem, porem faz voce conseguir os preços dos produtos
  })

  //transformçao de dados, criando uma lista de produtos com apenas as informações nescessarias
  const products = response.data.map( product => {
    const price = product.default_price as Stripe.Price //isso aqui ainda para pegar o preço
    return{
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount!/100), //dividindo o preço por 100 porque ele vem em centavos
    }
  })
  // console.log(response.data)

  //aqui estou retornando a todos os dados
  return {
    props:{
      products
    },
    revalidate: 60 * 60 * 2 ,//requisiçao automatica a cada 2horas
  }
}


// //CONCEITO DE SSR (TODA VEZ QUE O USUARIO ATUALIZAR ELE VAI BUSCAR OS DADOS NA API, NAO DEIXANDO TÃO PERFORMATICO)
// // o codigo que eu colocar aqui dentro nao vai estar disponivel para o usuario final 
// export const getServerSideProps: GetServerSideProps = async () => {
//   // buscando a lista de produtos cadastrada no stripe
//   const response = await stripe.products.list({
//     expand: ['data.default_price']//um conceito do stripe que nao entendi muito bem, porem faz voce conseguir os preços dos produtos
//   })

//   //transformçao de dados, criando uma lista de produtos com apenas as informações nescessarias
//   const products = response.data.map( product => {
//     const price = product.default_price as Stripe.Price //isso aqui ainda para pegar o preço
//     return{
//       id: product.id,
//       name: product.name,
//       imageUrl: product.images[0],
//       price: new Intl.NumberFormat('pt-BR', {
//         style: 'currency',
//         currency: 'BRL'
//       }).format(price.unit_amount!/100), //dividindo o preço por 100 porque ele vem em centavos
//     }
//   })
//   console.log(response.data)

//   //aqui estou retornando a todos os dados
//   return {
//     props:{
//       products
//     }
//   }
// }
