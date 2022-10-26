import React, { createContext, useEffect, useState } from 'react'
import { clothesData } from './data'
const Context = createContext()

function ContextProvider({ children }) {
  const [clothes, setClothes] = useState(clothesData)
  const [cartItems, setCartItems] = useState([])
  const [cartInfo, setCartInfo] = useState([])
  const [favoritedItems, setFavoritedItems] = useState([])

  function addToFavorites(newItem) {
    setFavoritedItems((favoritedItems) => [...favoritedItems, newItem])
  }

  function removeFromFavorites(id) {
    setFavoritedItems(favoritedItems.filter((item) => item.id !== id))
  }

  function addToCart(newItem) {
    setCartItems((cartItems) => [...cartItems, newItem])
  }

  function removeFromCart(id) {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  function addCartInfo(newItem) {
    setCartInfo([newItem])
  }

  return (
    <Context.Provider
      value={{
        clothes,
        cartItems,
        favoritedItems,
        cartInfo,
        addCartInfo,
        setFavoritedItems,
        setCartItems,
        addToCart,
        removeFromCart,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
