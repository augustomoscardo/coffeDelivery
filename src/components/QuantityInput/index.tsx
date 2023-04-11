import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  onIncresaseQuantity: () => void
  onDecreaseQuantiy: () => void
}

export function QuantityInput({
  quantity,
  onIncresaseQuantity,
  onDecreaseQuantiy,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <IconWrapper onClick={onDecreaseQuantiy} disabled={quantity < 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>

      <input type="number" readOnly value={quantity} />

      <IconWrapper onClick={onIncresaseQuantity}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
