import { useContext } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartContext, CartItem } from '../../../../contexts/CartContext'
import { formatPrice } from '../../../../utils/formatPrice'
import { CoffeCard } from './styles'

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

        <div>
          <QuantityInput
            quantity={coffee.quantity}
            onIncresaseQuantity={handleIncreaseCartItem}
            onDecreaseQuantity={handleDecreaseCartItem}
          />
          <button onClick={handleRemoveCoffeFromCart}>Remover</button>
        </div>
      </div>

      <p>R${formatPrice(coffee.price)}</p>
    </CoffeCard>
  )
}
