import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'

function InCart() {
  const [buttonText, setButtotText] = useState('Place Order')
  const { cartItems, setCartItems } = useContext(Context)

  const totalAmount = cartItems
    .map((totalCost) => totalCost.price)
    .reduce((acc, tot) => acc + tot, 0)

  const inCartElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} totalAmount={totalAmount} />
  })

  function placeOrder() {
    setButtotText('Ordering...')
    setTimeout(() => {
      setButtotText(setButtotText)
      setCartItems([])
    }, 1500)
  }

  return (
    <div className='cart-container'>
      {inCartElements}
      <br />
      {cartItems.length > 0 && (
        <div className='total-amount'>
          <p className='item-price'>Total Amount: ${totalAmount}</p>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className='order-btn'>
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      )}
    </div>
  )
}

export default InCart
