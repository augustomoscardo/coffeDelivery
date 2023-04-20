import { MapPin } from 'phosphor-react'
import { OrderInfo, SuccessContainer } from './styles'

export function SuccessOrder() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <OrderInfo>
        <div>
          <MapPin />

          <p>Rua teste</p>
        </div>
      </OrderInfo>
    </SuccessContainer>
  )
}
