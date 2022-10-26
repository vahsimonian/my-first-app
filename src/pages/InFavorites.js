import React, { useContext, useState } from 'react'
import Favorited from '../components/Favorited'
import { Context } from '../Context'

function InFavorites() {
  const [buttonText, setButtotText] = useState('Clean')
  const { favoritedItems, setFavoritedItems, addCartInfo } = useContext(Context)

  const favoritedElements = favoritedItems.map((item) => {
    return <Favorited key={item.id} item={item} />
  })

  function deleteFavorites() {
    setFavoritedItems([])
  }

  return (
    <div className='fav'>
      <div className='fav-container'>
        {favoritedElements}
        <br />
      </div>
      {favoritedItems.length > 0 && (
        <div className='clean-btn'>
          <button onClick={deleteFavorites}>{buttonText}</button>
        </div>
      )}
    </div>
  )
}

export default InFavorites
