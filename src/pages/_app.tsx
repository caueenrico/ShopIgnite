
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoimg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'

import { Cart } from '../components/Cart'




globalStyles() //para que os estilos globais possam ser carregados

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <Header>
        <Image src={logoimg} alt="" />
        <Cart />
      </Header>
      
      
      <Component {...pageProps} />
    </Container>
  )
  
}
