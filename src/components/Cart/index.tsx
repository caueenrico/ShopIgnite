
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { CartButton } from '../CartButton'
import { CartItem } from '../Cartitem'

import { CartClose, CartContent } from './styles'

export function Cart() {
  return (
  <Dialog.Root>

    <Dialog.Trigger asChild>
      <CartButton onClick={() => console.log('clicou')}/>
    </Dialog.Trigger> 
     
    <Dialog.Portal>
      <CartContent>

        <CartClose>
         <X size={24} weight='bold'/>
        </CartClose>

        <h1>Sacola de Compras</h1>

        <section>
          <CartItem/>

          <CartItem/>

         
          
          
        </section>

        <footer>

          <div>
            <h2>Quantidade</h2>
            <span>3 itens </span>
          </div>

          <div>
            <h3>Valor total</h3>
            <p>R$ 179,70</p>
          </div>

          <button>Finalizar Compra</button>
        </footer>

      </CartContent>
    </Dialog.Portal>
  </Dialog.Root>

  )
  
}