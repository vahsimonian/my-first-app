import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

function Favorited({ item }) {
  const [hovered, setHovered] = useState(false)
  const { favoritedItems, removeFromFavorites, addCartInfo } =
    useContext(Context)

  return (
    <div className='fav-item'>
      <span
        className='empty-heart-icon '
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => removeFromFavorites(item.id)}
      >
        🤍disLike
      </span>

      <Link to={'/cart-info'}>
        <img
          src={item.url}
          width={'100px'}
          className='fav-img'
          onClick={() => addCartInfo(item)}
        />
      </Link>
      <div className='inlikes-desc'>
        <h4 className='fav-desc'>{item.desc}</h4>
        <p className='fav-price item-price'>price: ${item.price}</p>
      </div>
    </div>
  )
}

export default Favorited
