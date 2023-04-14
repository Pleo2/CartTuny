import { createContext, useState } from 'react'

export const CartContext = createContext(null) 

export const CartProvider = ({children}) => {
  const [showCart, setShowCart] = useState(false)

  return (
    <CartContext.Provider 
      value={{
          showCart,
          setShowCart
        }}>
      {children}
    </CartContext.Provider>
  )
}