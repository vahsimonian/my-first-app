import React, { useContext } from 'react'
import { Context } from '../Context'
import CartInfoItem from '../components/CartInfoItem'
import { Link } from 'react-router-dom'

function CartInfo() {
  const { cartInfo } = useContext(Context)

  const cartInfoEl = cartInfo.map((item) => {
    return <CartInfoItem key={item.id} item={item} />
  })

  return (
    <div>
      <Link to={'/'}> Back to the !SHOP </Link>
      <div className='info-div-img'>{cartInfoEl}</div>
    </div>
  )
}

export default CartInfo
