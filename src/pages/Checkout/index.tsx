import { CheckoutForm } from './components/CheckoutForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'

export function Checkout() {
  // const { cartItems, cartTotalValue } = useContext(CartContext)
  // const { register, handleSubmit, watch, formState } = useForm()

  // const deliveryTax = 3.5
  // const totalOrder = cartTotalValue + deliveryTax

  // function handleCreateNewOrder(data: any) {
  //   console.log('Novo pedido recedibo')

  //   redirect('/success')
  // }

  return (
    <CheckoutContainer>
      {/* <CheckoutFormContainer>
        <h2>Complete seu pedido</h2>

        <FormWrapper>
          <div>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <Form id="orderForm" onSubmit={handleSubmit(handleCreateNewOrder)}>
            <CEPInput
              type="number"
              placeholder="CEP"
              {...register('zipCode')}
            />
            <StreetInput
              type="text"
              placeholder="Rua"
              {...register('street')}
            />

            <div>
              <LocationNumberInput
                type="number"
                placeholder="Número"
                {...register('placeNumber')}
              />
              <ComplementInput
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
            </div>

            <div>
              <NeighborhoodInput
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              <CityInput
                type="text"
                placeholder="Cidade"
                {...register('city')}
              />
              <UFInput type="text" placeholder="UF" {...register('uf')} />
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
      </CheckoutFormContainer> */}
      <CheckoutForm />

      {/* <SelectedCoffeesContainer>
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
      </SelectedCoffeesContainer> */}
      <SelectedCoffees />
    </CheckoutContainer>
  )
}
