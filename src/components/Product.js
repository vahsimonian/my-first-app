import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

function Product({ thing }) {
  const [hovered, setHovered] = useState(false)
  const {
    cartItems,
    addToCart,
    addCartInfo,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
    favoritedItems,
  } = useContext(Context)

  function heartIcon() {
    const alreadyFavorited = favoritedItems.some((item) => item.id === thing.id)
    if (alreadyFavorited) {
      return (
        <i
          className='ri-heart-fill favorite heart-cart-icon'
          onClick={() => removeFromFavorites(thing.id)}
        ></i>
      )
    } else if (hovered) {
      return (
        <i
          className='ri-heart-line favorite heart-cart-icon'
          onClick={() => addToFavorites(thing)}
        ></i>
      )
    }
  }

  function binIconHover() {
    const alreadyInCart = cartItems.some((item) => item.id === thing.id)
    if (alreadyInCart) {
      return (
        <i
          className='ri-shopping-cart-fill add-cart-icon'
          onClick={() => removeFromCart(thing.id)}
        ></i>
      )
    } else if (hovered) {
      return (
        <i
          className='ri-shopping-cart-line add-cart-icon'
          onClick={() => addToCart(thing)}
        ></i>
      )
    }
  }

  return (
    <div
      className='product-container'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='image-container'>
        <Link to={'/cart-info'}>
          <img
            src={thing.url}
            width='130px'
            className='image-div'
            onClick={() => addCartInfo(thing)}
          />
        </Link>
        {heartIcon()}
        {binIconHover()}

        <div className='price-info'>
          <p className='title'>Title: {thing.title}</p>
          <p className='price item-price'>Price: ${thing.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
