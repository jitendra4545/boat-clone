import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { ProductPage, WatchPage } from './ProductPages/WatchPage'
import { CartPage } from './CartPage'
import { AddressPage } from './AddressPage'
import { PaymentPage } from './PaymentPage'
import LoginDetails  from './LoginDetails'
import  Register  from './Register'
import { SingleProductPage } from './SingleProductPage'
import { EarbudPage } from './ProductPages/EarbudPage'
import { HeadPhonePage } from './ProductPages/HeadPhonePage'
import { SpeakerPage } from './ProductPages/SpeakerPage'

export const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/earbud' element={<EarbudPage/>} />
          <Route path='/speaker' element={<SpeakerPage/>} />
          <Route path='/headphone' element={<HeadPhonePage/>} />
          <Route path='/watch' element={<WatchPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/address' element={<AddressPage/>} />
          <Route path='/payment' element={<PaymentPage/>} />
          <Route path='/login' element={<LoginDetails/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/product/:id' element={<SingleProductPage/>} />
      </Routes>
  )
}
