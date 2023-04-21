import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { CheckoutForm } from './components/CheckoutForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'

export function Checkout() {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)

  useEffect(() => {
    if (!cartItems.length) navigate('/')
  }, [cartItems, navigate])

  return (
    <CheckoutContainer>
      <CheckoutForm />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}
