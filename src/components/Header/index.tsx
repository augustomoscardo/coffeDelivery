import { ShoppingCart, MapPin } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <div className="">
        <div className="location">
          <MapPin size={22} weight="fill" />
          <span>Taubaté, SP</span>
        </div>

        <button type="button" className="cartButton">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
