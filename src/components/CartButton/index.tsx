import { HandbagSimple } from "phosphor-react";
import { ComponentProps } from "react";
import { CartButtonContainer } from "./styles";

type CartbuttonProps = ComponentProps<typeof CartButtonContainer> & {
}

export function CartButton({...rest}:CartbuttonProps){

  return (
    <CartButtonContainer {...rest}>
        <HandbagSimple size={24} weight='bold'/>
    </CartButtonContainer>
  )
}