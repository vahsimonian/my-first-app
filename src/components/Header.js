import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

function Header() {
  const { cartItems, favoritedItems } = useContext(Context)

  const classShopIcon = cartItems.length > 0 ? 'fill' : 'line'

  return (
    <header>
      <Link to={'/'}>
        <i className='fa-solid fa-bag-shopping bag-cart'>
          <span> !shop</span>
        </i>
      </Link>
      <Link to={'/liked'}>
        <h4 className='liked'>
          <span>my </span> <span className='heart-icon'> l i k e s ❤️</span>
        </h4>
      </Link>
      <Link to={'/cart'}>
        <i
          className={`ri-shopping-cart-${classShopIcon} ri-fw ri-2x fa-solid`}
        ></i>
      </Link>
    </header>
  )
}

export default Header
