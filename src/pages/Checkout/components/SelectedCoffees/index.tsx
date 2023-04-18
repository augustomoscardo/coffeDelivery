import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { formatPrice } from '../../../../utils/formatPrice'
import { CoffeeCardInCart } from '../CoffeeCardInCart'
import {
  ConfirmOrderButton,
  PriceWrapper,
  SelectedCoffeesContainer,
  SummaryCart,
} from './styles'

export function SelectedCoffees() {
  const { cartItems, cartTotalValue } = useContext(CartContext)

  const deliveryTax = 3.5
  const totalOrder = cartTotalValue + deliveryTax

  return (
    <SelectedCoffeesContainer>
      <h2>Cafés selecionados</h2>

      <div>
        {cartItems.map((item) => (
          <CoffeeCardInCart key={item.id} coffee={item} />
        ))}

        <SummaryCart>
          <PriceWrapper>
            <div>
              <p>Total de Itens</p>
              <p>R$ {formatPrice(cartTotalValue)}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ {formatPrice(deliveryTax)}</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$ {formatPrice(totalOrder)}</p>
            </div>
          </PriceWrapper>

          <ConfirmOrderButton type="submit" form="orderForm">
            Confirmar Pedido
          </ConfirmOrderButton>
        </SummaryCart>
      </div>
    </SelectedCoffeesContainer>
  )
}
