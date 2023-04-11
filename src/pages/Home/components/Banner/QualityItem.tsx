import { ReactNode } from 'react'

import { IconContainer, IconVariant } from './styles'

interface QualityItemProps {
  icon: ReactNode
  text: string
  variant: IconVariant
}

export function QualityItem({ icon, text, variant }: QualityItemProps) {
  return (
    <div className="qualityItem">
      <IconContainer variant={variant}>{icon}</IconContainer>
      <p>{text}</p>
    </div>
  )
}
