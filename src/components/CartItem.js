import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

function CartItem({ item }) {
  const [hovered, setHovered] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [itemPrice, setItemPrice] = useState(item.price)
  const { removeFromCart, addCartInfo, cartItems } = useContext(Context)

  const binIconHover = hovered ? 'fill' : 'line'

  function plusButton() {
    setQuantity(quantity + 1)
    setItemPrice((itemPrice) => {
      const itemQuantity = quantity.length
      return {
        itemPrice: itemPrice * itemQuantity,
      }
    })
  }

  function minusButton() {
    if (quantity < 2) {
      // removeFromCart(item.id)
    } else setQuantity(quantity - 1)
  }

  return (
    <div className='cart-item'>
      <i
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`ri-delete-bin-${binIconHover} bin-icon`}
        onClick={() => removeFromCart(item.id)}
      ></i>
      <Link to={'/cart-info'}>
        <img src={item.url} width='100px' onClick={() => addCartInfo(item)} />
      </Link>
      <div className='item-in-cart'>
        <p className='item-price'>Price: ${itemPrice}</p>
        <h5>Quantity: {quantity}</h5>
        <h3>{item.desc}</h3>
      </div>
      <div>
        <button className='total-amount-btn' onClick={plusButton}>
          +
        </button>
        &nbsp;
        <button className='total-amount-btn' onClick={minusButton}>
          -
        </button>
      </div>
    </div>
  )
}

export default CartItem
