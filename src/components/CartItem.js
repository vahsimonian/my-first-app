import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

function CartItem({ item }) {
  const [hovered, setHovered] = useState(false)
  const { removeFromCart, addCartInfo, addToCart, toggleItemCount } =
    useContext(Context)

  const binIconHover = hovered ? 'fill' : 'line'

  const quantity = item.count || 1

  function plusButton() {
    toggleItemCount(item.id, quantity + 1)
  }

  // setQuantity((quantity) => quantity - 1)
  // if (quantity <= 1) {
  //   setTimeout(() => {
  //     removeFromCart(item.id)
  //   }, 500)
  // }

  function minusButton() {
    toggleItemCount(item.id, quantity - 1)
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
        <p className='item-price'>Price: ${item.price * quantity}</p>
        {/* <h5>Quantity: {quantity}</h5> */}
        <h3>{item.desc}</h3>
      </div>
      <div className='buttons'>
        <button className='add-minus-btn' onClick={plusButton}>
          +
        </button>
        {/* &nbsp; */}
        <h2>{quantity}</h2>
        <button
          className='add-minus-btn'
          disabled={quantity === 1}
          onClick={minusButton}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default CartItem
