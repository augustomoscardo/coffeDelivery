import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout/components/CheckoutForm'
import { OrderItemInfo } from './components/OrderItemInfo'
import { ConfirmMessageWrapper, OrderInfo, SuccessContainer } from './styles'

import { useEffect } from 'react'
import confirmIllustration from '../../assets/confirmIllustration.jpg'

export function SuccessOrder(props: any) {
  const location = useLocation()
  const navigate = useNavigate()

  const data: OrderData = location.state

  console.log(data)

  useEffect(() => {
    if (!data) navigate('/')
  })

  let paymentMethodChosen = ''

  switch (data.paymentMethod) {
    case 'débito':
      paymentMethodChosen = 'Cartão de Débito'
      break
    case 'crédito':
      paymentMethodChosen = 'Cartão de Débito'
      break
    default:
      paymentMethodChosen = 'Dinheiro'
  }

  return (
    <SuccessContainer>
      <ConfirmMessageWrapper>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </ConfirmMessageWrapper>

      <section>
        <OrderInfo>
          {/* <ItemInfo>
          <MapPin weight="fill" size={16} />
          <p>
            Entrega em{' '}
            <strong>{`${data.street}, ${data.locationNumber} - ${data.neighborhood} - ${data.city}, ${data.uf}`}</strong>
          </p>
        </ItemInfo> */}
          <OrderItemInfo
            icon={<MapPin weight="fill" size={16} />}
            variant="mediumPurple"
            regularText="Entrega em "
            boldText={`${data.street}, ${data.locationNumber} - ${data.neighborhood} - ${data.city}, ${data.uf}`}
          />

          {/* <ItemInfo>
          <Timer weight="fill" size={16} />
          <p>
            Previsão de entrega
            <strong>20 min - 30 min</strong>
          </p>
        </ItemInfo> */}
          <OrderItemInfo
            icon={<Timer weight="fill" size={16} />}
            variant="mediumYellow"
            regularText="Previsão de entrega "
            boldText="20 min - 30 min"
          />

          {/* <ItemInfo>
          <CurrencyDollar weight="fill" size={16} />
          <p>
            Pagamento na Entrega
            <strong>{paymentMethodChosen}</strong>
          </p>
        </ItemInfo> */}
          <OrderItemInfo
            icon={<CurrencyDollar weight="fill" size={16} />}
            variant="darkYellow"
            regularText="Pagamento na Entrega "
            boldText={paymentMethodChosen}
          />
        </OrderInfo>
        <img src={confirmIllustration} alt="" />
      </section>
    </SuccessContainer>
  )
}
