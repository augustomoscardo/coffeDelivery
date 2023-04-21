import { ReactNode } from 'react'
import {
  IconContainer,
  IconVariant,
} from '../../../Home/components/Banner/styles'
import { OrderItemInfoContainer } from './styles'

interface OrdemItemInfo {
  icon: ReactNode
  variant: IconVariant
  regularText: string
  boldText: string
}

export function OrderItemInfo({
  icon,
  variant,
  regularText,
  boldText,
}: OrdemItemInfo) {
  return (
    <OrderItemInfoContainer>
      <IconContainer variant={variant}>{icon}</IconContainer>
      <p>
        {regularText}
        <strong>{boldText}</strong>
      </p>
    </OrderItemInfoContainer>
  )
}
