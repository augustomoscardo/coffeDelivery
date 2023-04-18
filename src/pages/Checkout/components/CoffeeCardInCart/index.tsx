import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartContext, CartItem } from '../../../../contexts/CartContext'
import { formatPrice } from '../../../../utils/formatPrice'
import { ButtonActionsContainer, CoffeCard, RemoveButton } from './styles'

interface CoffeeCardInCartProps {
  coffee: CartItem
}

export function CoffeeCardInCart({ coffee }: CoffeeCardInCartProps) {
  const { changeCoffeCardQuantity, removeCartItem } = useContext(CartContext)

  function handleIncreaseCartItem() {
    changeCoffeCardQuantity(coffee.id, 'increase')
  }

  function handleDecreaseCartItem() {
    changeCoffeCardQuantity(coffee.id, 'decrease')
  }

  function handleRemoveCoffeFromCart() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeCard>
      <img
        src={`/img/${coffee.photo}`}
        alt={`Imagem de uma chícara de ${coffee.name}`}
      />

      <div>
        <p>{coffee.name}</p>

        <ButtonActionsContainer>
          <QuantityInput
            quantity={coffee.quantity}
            onIncresaseQuantity={handleIncreaseCartItem}
            onDecreaseQuantity={handleDecreaseCartItem}
          />
          <RemoveButton onClick={handleRemoveCoffeFromCart}>
            <Trash />
            Remover
          </RemoveButton>
        </ButtonActionsContainer>
      </div>

      <p>R${formatPrice(coffee.price)}</p>
    </CoffeCard>
  )
}
