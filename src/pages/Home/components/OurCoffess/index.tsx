import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  OurCoffeesContainer,
  PriceContainer,
  Tags,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import randomCoffeeImg from '../../../../assets/img/capuccino.png'
import { QuantityInput } from '../../../../components/QuantityInput'

export function OurCoffees() {
  const [quantity, setQuantity] = useState(0)

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity((state) => state - 1)
  }

  return (
    <OurCoffeesContainer>
      <h2>Nossos Cafés</h2>

      <div>
        <CoffeeCardContainer>
          <img src={randomCoffeeImg} alt="Imagem de uma chícara de Capuccino" />
          <Tags>
            <span>Tradicional</span>
          </Tags>
          <span>Expresso Tradicional</span>
          <p>O tradicional café feito com água quente e grãos moídos</p>

          <CardFooter>
            <PriceContainer>
              <p>
                R$<strong>9,90</strong>
              </p>
            </PriceContainer>

            <AddCartWrapper>
              <QuantityInput
                quantity={quantity}
                onIncresaseQuantity={handleIncreaseQuantity}
                onDecreaseQuantiy={handleDecreaseQuantity}
              />

              <button>
                <ShoppingCart size={20} weight="fill" />
              </button>
            </AddCartWrapper>
          </CardFooter>
        </CoffeeCardContainer>
      </div>
    </OurCoffeesContainer>
  )
}
