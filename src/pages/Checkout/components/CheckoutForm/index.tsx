import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { CartContext } from '../../../../contexts/CartContext'
import {
  BaseInput,
  CheckoutFormContainer,
  ComplementInputWrapper,
  ErrorMessage,
  Form,
  FormWrapper,
  InputBox,
  Payment,
  PaymentMethodInput,
  PaymentMethods,
} from './styles'

const PaymentMethodsOptions = {
  credit: 'crédito',
  debit: 'débito',
  money: 'dinheiro',
}

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
  paymentMethod: zod.nativeEnum(PaymentMethodsOptions, {
    errorMap: () => {
      return { message: 'Escolha um método de pagamento.' }
    },
  }),
})

type NewCoffeeOrderData = zod.infer<typeof newCoffeeOrderValidationSchema>

export type OrderData = NewCoffeeOrderData

export function CheckoutForm() {
  const { clearCart } = useContext(CartContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<NewCoffeeOrderData>({
    resolver: zodResolver(newCoffeeOrderValidationSchema),
  })

  const navigate = useNavigate()

  function handleCreateNewOrder(data: OrderData) {
    console.log(data)

    navigate('/success', {
      state: data,
    })

    clearCart()
  }

  async function getAddress(zipCode: number) {
    const getAddress = await fetch(
      `https://viacep.com.br/ws/${zipCode}/json/`,
    ).then((response) => response.json())

    console.log(getAddress)

    if (getAddress) {
      setValue('street', getAddress.logradouro)
      setValue('neighborhood', getAddress.bairro)
      setValue('city', getAddress.localidade)
      setValue('uf', getAddress.uf)
    }
  }

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
          <InputBox>
            <BaseInput
              type="text"
              width="md"
              placeholder="CEP"
              {...register('zipCode', {
                required: 'Informe um CEP',
              })}
              maxLength={8}
              onBlur={(e) => getAddress(Number(e.target.value))}
            />
            {errors.zipCode?.message && (
              <ErrorMessage>{errors.zipCode?.message}</ErrorMessage>
            )}
          </InputBox>

          <InputBox>
            <BaseInput
              type="text"
              width="lg"
              placeholder="Rua"
              {...register('street')}
            />
            {errors.street?.message && (
              <ErrorMessage>{errors.street?.message}</ErrorMessage>
            )}
          </InputBox>

          <InputBox>
            <BaseInput
              type="text"
              width="md"
              placeholder="Número"
              {...register('locationNumber')}
            />
            <ComplementInputWrapper>
              <BaseInput
                type="text"
                width="lg"
                placeholder="Complemento"
                {...register('complement')}
              />
              <p>Opcional</p>
            </ComplementInputWrapper>
          </InputBox>

          <InputBox>
            <div>
              <BaseInput
                type="text"
                width="md"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              {errors.neighborhood?.message && (
                <ErrorMessage>{errors.neighborhood?.message}</ErrorMessage>
              )}
            </div>
            <div>
              <BaseInput
                type="text"
                width="lg"
                placeholder="Cidade"
                {...register('city')}
              />
              {errors.city?.message && (
                <ErrorMessage>{errors.city?.message}</ErrorMessage>
              )}
            </div>
            <div>
              <BaseInput
                type="text"
                width="sm"
                placeholder="UF"
                {...register('uf')}
              />
              {errors.uf?.message && (
                <ErrorMessage>{errors.uf?.message}</ErrorMessage>
              )}
            </div>
          </InputBox>
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
        {errors.paymentMethod?.message && (
          <ErrorMessage>{errors.paymentMethod?.message}</ErrorMessage>
        )}
      </Payment>
    </CheckoutFormContainer>
  )
}
