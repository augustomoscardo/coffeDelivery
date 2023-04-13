import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CEPInput,
  CheckoutContainer,
  CheckoutFormContainer,
  CityInput,
  ComplementInput,
  Form,
  FormWrapper,
  LocationNumberInput,
  NeighborhoodInput,
  Payment,
  PaymentMethodInput,
  PaymentMethods,
  SelectedCoffeesWrapper,
  StreetInput,
  UFInput,
} from './styles'

export function Checkout() {
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

      <SelectedCoffeesWrapper>
        <h2>Cafés selecionados</h2>

        <div></div>
      </SelectedCoffeesWrapper>
    </CheckoutContainer>
  )
}
