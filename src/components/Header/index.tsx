import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { CartButton, HeaderContainer, LocationWrapper } from './styles'

export function Header() {
  const { cartQuantity } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logoImg} alt="" />
      </NavLink>
      <div className="">
        <LocationWrapper>
          <MapPin size={22} weight="fill" />
          <span>Taubaté, SP</span>
        </LocationWrapper>

        <NavLink
          to={cartQuantity > 0 ? '/checkout' : '/'}
          aria-disabled={cartQuantity < 1}
        >
          <CartButton type="button" className="cartButton">
            <ShoppingCart size={22} weight="fill" />
            {cartQuantity > 0 && <span>{cartQuantity}</span>}
          </CartButton>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
