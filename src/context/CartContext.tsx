import { ReactNode, createContext } from 'react'

// interface CartContextData {}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({})

export function CartContextProvider({ children }: CartContextProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}
