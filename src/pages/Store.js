import React, { useContext } from 'react'
import { Context } from '../Context'
import Product from '../components/Product'

function Store() {
  const { clothes } = useContext(Context)
  const imageElements = clothes.map((thing) => {
    return <Product key={thing.id} thing={thing} />
  })

  return (
    <div className='shop-container'>
      <a
        href='https://unsplash.com/s/photos/fashion-men'
        target='_blank'
        id='a'
      >
        unsplash.com
      </a>
      <h1>Check out today's best for you</h1>
      <div>
        <div className='row'>{imageElements}</div>
      </div>
    </div>
  )
}

export default Store
