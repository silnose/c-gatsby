import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = element => {
    console.log("add")
    setCart([...cart, element])
  }
  return (
    <>
      <CartContext.Provider value={{ cart, addToCart }}>
        {children}
      </CartContext.Provider>
    </>
  )
}
