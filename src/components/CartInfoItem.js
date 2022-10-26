import React from 'react'

function CartInfoItem({ item }) {
  return (
    <div>
      <p className='item-price'>Price: ${item.price}</p>
      <p className='item-price'>Available in stock: {item.quantity}</p>
      <div className='men'>
        <h4>{item.desc}</h4>
      </div>
      <div className='image-info-row'>
        <img src={item.url} />
        <div>
          <img src={item.url} width='150px' className='three-images' />
          <img src={item.url} width='150px' className='three-images' />
          <img src={item.url} width='150px' className='three-images' />
        </div>
      </div>
    </div>
  )
}

export default CartInfoItem
