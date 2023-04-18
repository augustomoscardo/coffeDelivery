import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import {
  CEPInput,
  CheckoutFormContainer,
  CityInput,
  ComplementInput,
  ErrorMessage,
  Form,
  FormWrapper,
  LocationNumberInput,
  NeighborhoodInput,
  Payment,
  PaymentMethodInput,
  PaymentMethods,
  StreetInput,
  UFInput,
} from './styles'

const newCoffeeOrderValidationSchema = zod.object({
  zipCode: zod
    .string()
    .min(8, 'Informe um CEP válido')
    .transform((v) => Number(v)),
  street: zod.string().min(5, 'Informe o endereço'),
  locationNumber: zod.string().optional(),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(10, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o estado').max(2, 'Informe apenas a sigla'),
  paymentMethod: zod.string(),
})

type NewCoffeeOrderData = zod.infer<typeof newCoffeeOrderValidationSchema>

export function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCoffeeOrderData>({
    resolver: zodResolver(newCoffeeOrderValidationSchema),
  })

  const navigate = useNavigate()

  function handleCreateNewOrder(data: any) {
    console.log(data)

    navigate('/success')
  }
  console.log(errors)

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

        <Form id="orderForm" onSubmit={handleSubmit(handleCreateNewOrder)}>
          <CEPInput
            type="text"
            placeholder="CEP"
            {...register('zipCode', {
              required: 'Informe um CEP',
            })}
          />
          {errors.zipCode?.message && (
            <ErrorMessage>{errors.zipCode?.message}</ErrorMessage>
          )}
          <StreetInput type="text" placeholder="Rua" {...register('street')} />
          {errors.street?.message && (
            <ErrorMessage>{errors.street?.message}</ErrorMessage>
          )}

          <div>
            <LocationNumberInput
              type="text"
              placeholder="Número"
              {...register('locationNumber')}
            />
            {errors.locationNumber?.message && (
              <ErrorMessage>{errors.locationNumber?.message}</ErrorMessage>
            )}
            <ComplementInput
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
            {errors.complement?.message && (
              <ErrorMessage>{errors.complement?.message}</ErrorMessage>
            )}
          </div>

          <div>
            <NeighborhoodInput
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            {errors.neighborhood?.message && (
              <ErrorMessage>{errors.neighborhood?.message}</ErrorMessage>
            )}
            <CityInput type="text" placeholder="Cidade" {...register('city')} />
            {errors.city?.message && (
              <ErrorMessage>{errors.city?.message}</ErrorMessage>
            )}
            <UFInput type="text" placeholder="UF" {...register('uf')} />
            {errors.uf?.message && (
              <ErrorMessage>{errors.uf?.message}</ErrorMessage>
            )}
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
            <input
              id="credito"
              type="radio"
              {...register('paymentMethod')}
              value="crédito"
            />
            <label htmlFor="credito">
              <div>
                <CreditCard size={16} />
                <p>Cartão de Crédito</p>
              </div>
            </label>
          </PaymentMethodInput>

          <PaymentMethodInput>
            <input
              id="debito"
              type="radio"
              {...register('paymentMethod')}
              value="débito"
            />
            <label htmlFor="debito">
              <div>
                <Bank size={16} />
                <p>Cartão de Débito</p>
              </div>
            </label>
          </PaymentMethodInput>

          <PaymentMethodInput>
            <input
              id="dinheiro"
              type="radio"
              {...register('paymentMethod')}
              value="dinheiro"
            />
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
  )
}
