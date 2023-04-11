import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import bannerImg from '../../../../assets/coffeeCup.png'

import { QualityItem } from './QualityItem'
import { BannerContainer } from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <div className="bannerTitle">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div className="qualities">
          <QualityItem
            icon={<ShoppingCart size={16} weight="fill" />}
            text="Compra simples e segura"
            variant="darkYellow"
          />
          <QualityItem
            icon={<Package size={16} weight="fill" />}
            text="Embalagem mantém o café intacto"
            variant="darkGray"
          />
          <QualityItem
            icon={<Timer size={16} weight="fill" />}
            text="Entrega rápida e rastreada"
            variant="mediumYellow"
          />
          <QualityItem
            icon={<Coffee size={16} weight="fill" />}
            text="O café chega fresquinho até você"
            variant="mediumPurple"
          />
        </div>
      </div>
      <img src={bannerImg} alt="" />
    </BannerContainer>
  )
}
