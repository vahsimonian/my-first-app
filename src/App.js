import React from 'react'
import Store from '../src/pages/Store'
import Header from './components/Header'
import { Routes, Route, Link } from 'react-router-dom'
import InCart from './pages/InCart'
import CartInfo from './pages/CartInfo'
import InFavorites from './pages/InFavorites'

function App() {
  return (
    <div>
      <Header />
      <div className='store-container'>
        <Routes>
          <Route index element={<Store />} />
          <Route path='/cart' element={<InCart />} />
          <Route path='/cart-info' element={<CartInfo />} />
          <Route path='/liked' element={<InFavorites />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
