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
import { QuantityInput } from '../../../../components/QuantityInput'
import { coffees } from '../../../../data/coffees'
import { formatPrice } from '../../../../utils/formatPrice'

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
        {/* <CoffeeCardContainer>
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
        </CoffeeCardContainer> */}

        {coffees.map((coffee) => (
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

                <button>
                  <ShoppingCart size={20} weight="fill" />
                </button>
              </AddCartWrapper>
            </CardFooter>
          </CoffeeCardContainer>
        ))}
      </div>
    </OurCoffeesContainer>
  )
}
