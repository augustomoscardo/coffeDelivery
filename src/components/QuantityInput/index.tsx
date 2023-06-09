import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  onIncresaseQuantity: () => void
  onDecreaseQuantity: () => void
}

export function QuantityInput({
  quantity,
  onIncresaseQuantity,
  onDecreaseQuantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <IconWrapper onClick={onDecreaseQuantity} disabled={quantity < 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>

      <input type="number" readOnly value={quantity} max={99} />

      <IconWrapper onClick={onIncresaseQuantity}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
