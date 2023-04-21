import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout/components/CheckoutForm'
import { OrderItemInfo } from './components/OrderItemInfo'
import { ConfirmMessageWrapper, OrderInfo, SuccessContainer } from './styles'

import { useEffect } from 'react'
import confirmIllustration from '../../assets/confirmIllustration.jpg'

export function SuccessOrder() {
  const location = useLocation()
  const navigate = useNavigate()

  const data: OrderData = location.state

  useEffect(() => {
    if (!data) navigate('/')
  }, [data, navigate])

  let paymentMethodChosen = ''

  switch (data?.paymentMethod) {
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
          <OrderItemInfo
            icon={<MapPin weight="fill" size={16} />}
            variant="mediumPurple"
            regularText="Entrega em "
            boldText={`${data?.street}, ${data?.locationNumber} - ${data?.neighborhood} - ${data?.city}, ${data?.uf}`}
          />
          <OrderItemInfo
            icon={<Timer weight="fill" size={16} />}
            variant="mediumYellow"
            regularText="Previsão de entrega "
            boldText="20 min - 30 min"
          />
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
