import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartContext } from '../../../../contexts/CartContext'
import { formatPrice } from '../../../../utils/formatPrice'
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  PriceContainer,
  Tags,
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(0)
  const { addCoffeeToCart } = useContext(CartContext)

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const newCoffee = {
      ...coffee,
      quantity,
    }

    if (quantity < 1) {
      return alert('A quantidade deve ser de pelo menos 1 item')
    }

    addCoffeeToCart(newCoffee)
    setQuantity(0)
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <img
        src={`/img/${coffee.photo}`}
        alt={`Imagem de uma chícara de ${coffee.name}`}
      />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <span>{coffee.name}</span>
      <p>{coffee.description}</p>

      <CardFooter>
        <PriceContainer>
          <p>
            R$<strong>{formatPrice(coffee.price)}</strong>
          </p>
        </PriceContainer>

        <AddCartWrapper>
          <QuantityInput
            quantity={quantity}
            onIncresaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
          />

          <button onClick={handleAddToCart}>
            <ShoppingCart size={20} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
