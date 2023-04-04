import bannerImg from '../../../../assets/coffeeCup.png'

import { BannerContainer } from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <div className="bannerTitle">
        <h3>Encontre o café perfeito para qualquer hora do dia</h3>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div className="qualities"></div>
      </div>
      <img src={bannerImg} alt="" />
    </BannerContainer>
  )
}
