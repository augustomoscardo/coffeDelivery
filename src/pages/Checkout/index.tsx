import { MapPinLine } from 'phosphor-react'
import {
  CheckouContainer,
  CheckoutFormContainer,
  Form,
  FormWrapper,
  PaymentMethods,
  SelectedCoffeesWrapper,
} from './styles'

export function Checkout() {
  return (
    <CheckouContainer>
      <CheckoutFormContainer>
        <h2>Comlpete seu pedido</h2>

        <FormWrapper>
          <div>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <Form>
            <input type="text" />
            <input type="text" />

            <div>
              <input type="text" />
              <input type="text" />
            </div>

            <div>
              <input type="text" />
              <input type="text" />
              <input type="text" />
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

      <SelectedCoffeesWrapper>
        <h2>Cafés selecionados</h2>

        <div></div>
      </SelectedCoffeesWrapper>
    </CheckouContainer>
  )
}
