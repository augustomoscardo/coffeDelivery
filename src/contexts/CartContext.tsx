import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

// Reaproveitar o tipo de Coffee e adicionar a quantidade
export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextData {
  cartItems: CartItem[]
  cartQuantity: number
  cartTotalValue: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCoffeCardQuantity: (cartItemId: number, type: string) => void
  removeCartItem: (coffeId: number) => void
  clearCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length
  const cartTotalValue = cartItems.reduce((acc, current) => {
    return acc + current.price * current.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const isCoffeeAlreadyInCart = cartItems.find(
      (cartItem) => cartItem.id === coffee.id,
    )

    if (isCoffeeAlreadyInCart) {
      setCartItems((state) =>
        state.map((cartItem) => {
          if (cartItem.id === coffee.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + coffee.quantity,
            }
          } else {
            return cartItem
          }
        }),
      )
    } else {
      setCartItems((state) => [...state, coffee])
    }
  }

  function changeCoffeCardQuantity(cartItemId: number, type: string) {
    const foundCoffee = cartItems.find((cartItem) => cartItem.id === cartItemId)

    if (foundCoffee) {
      setCartItems((state) =>
        state.map((cartItem) => {
          if (cartItem.id === foundCoffee.id) {
            return {
              ...cartItem,
              quantity:
                type === 'increase'
                  ? cartItem.quantity + 1
                  : cartItem.quantity - 1,
            }
          } else {
            return cartItem
          }
        }),
      )
    }
  }

  function removeCartItem(coffeId: number) {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== coffeId)

    setCartItems(newCartItems)
  }

  function clearCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        cartTotalValue,
        changeCoffeCardQuantity,
        clearCart,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
