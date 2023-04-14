import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { QuantityInput } from '../../components/QuantityInput'
import { CartContext } from '../../contexts/CartContext'
import {
  CEPInput,
  CheckoutContainer,
  CheckoutFormContainer,
  CityInput,
  CoffeCard,
  ComplementInput,
  Form,
  FormWrapper,
  LocationNumberInput,
  NeighborhoodInput,
  Payment,
  PaymentMethodInput,
  PaymentMethods,
  SelectedCoffeesContainer,
  StreetInput,
  UFInput,
} from './styles'

export function Checkout() {
  const { cartItems, changeCoffeCardQuantity } = useContext(CartContext)

  function handleIncreaseCartItem(coffeId: number) {
    changeCoffeCardQuantity(coffeId, 'increase')
  }

  function handleDecreaseCartItem(coffeId: number) {
    changeCoffeCardQuantity(coffeId, 'decrease')
  }

  return (
    <CheckoutContainer>
      <CheckoutFormContainer>
        <h2>Complete seu pedido</h2>

        <FormWrapper>
          <div>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <Form>
            <CEPInput type="number" placeholder="CEP" />
            <StreetInput type="text" placeholder="Rua" />

            <div>
              <LocationNumberInput type="number" placeholder="Número" />
              <ComplementInput type="text" placeholder="Complemento" />
            </div>

            <div>
              <NeighborhoodInput type="text" placeholder="Bairro" />
              <CityInput type="text" placeholder="Cidade" />
              <UFInput type="text" placeholder="UF" />
            </div>
          </Form>
        </FormWrapper>

        <Payment>
          <div>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <PaymentMethods>
            <PaymentMethodInput>
              <input id="credito" type="radio" name="paymentMethod" />
              <label htmlFor="credito">
                <div>
                  <CreditCard size={16} />
                  <p>Cartão de Crédito</p>
                </div>
              </label>
            </PaymentMethodInput>

            <PaymentMethodInput>
              <input id="debito" type="radio" name="paymentMethod" />
              <label htmlFor="debito">
                <div>
                  <Bank size={16} />
                  <p>Cartão de Débito</p>
                </div>
              </label>
            </PaymentMethodInput>

            <PaymentMethodInput>
              <input id="dinheiro" type="radio" name="paymentMethod" />
              <label htmlFor="dinheiro">
                <div>
                  <Money size={16} />
                  <p>Dinheiro</p>
                </div>
              </label>
            </PaymentMethodInput>
          </PaymentMethods>
        </Payment>
      </CheckoutFormContainer>

      <SelectedCoffeesContainer>
        <h2>Cafés selecionados</h2>

        <div>
          {cartItems.map((item) => (
            <CoffeCard key={item.id}>
              <img src={item.photo} alt="" />

              <div>
                <p></p>

                <div>
                  <QuantityInput
                    quantity={item.quantity}
                    onIncresaseQuantity={handleIncreaseCartItem}
                    onDecreaseQuantity={handleDecreaseCartItem}
                  />
                  <button>Remover</button>
                </div>
              </div>
            </CoffeCard>
          ))}
        </div>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
