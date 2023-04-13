import { MapPinLine } from 'phosphor-react'
import { Form } from 'react-router-dom'
import {
  CEPInput,
  CheckoutFormContainer,
  CityInput,
  ComplementInput,
  FormWrapper,
  LocationNumberInput,
  NeighborhoodInput,
  PaymentMethods,
  StreetInput,
  UFInput,
} from './styles'

export function CheckoutForm() {
  return (
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

      <PaymentMethods>
        <div>
          <MapPinLine size={22} />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>

        <div>
          <button type="button">Cartão de Crédito</button>
          <button type="button">Cartão de Débito</button>
          <button type="button">Dinheiro</button>
        </div>
      </PaymentMethods>
    </CheckoutFormContainer>
  )
}
