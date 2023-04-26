import Image from "next/image";
import { CartItemContainer, ContainerImage, DescriptionContainer } from "./styles";
import  camisa  from "../../assets/camisetas/1.png";


export function CartItem(){
  return (
    <CartItemContainer>
      <ContainerImage>
        <Image src={camisa}  alt=''/>
        
      </ContainerImage>

      <DescriptionContainer>
        <h3>Camiseta Beyond the Limits </h3>
        <p>R$ 59,90</p>
       
        <button>Remover</button>
      </DescriptionContainer>
    </CartItemContainer>
  )
}