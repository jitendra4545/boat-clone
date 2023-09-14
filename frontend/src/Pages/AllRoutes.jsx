import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { ProductPage } from './ProductPage'
import { CartPage } from './CartPage'
import { AddressPage } from './AddressPage'
import { PaymentPage } from './PaymentPage'
import LoginDetails  from './LoginDetails'
import  Register  from './Register'

export const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/product' element={<ProductPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/address' element={<AddressPage/>} />
          <Route path='/payment' element={<PaymentPage/>} />
          <Route path='/login' element={<LoginDetails/>} />
          <Route path='/register' element={<Register/>} />
      </Routes>
  )
}
