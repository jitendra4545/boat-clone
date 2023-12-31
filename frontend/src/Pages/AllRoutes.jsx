import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { ProductPage, WatchPage } from './ProductPages/WatchPage'
import { CartPage } from './CartPage'
import { AddressPage } from './AddressPage'
import { PaymentPage } from './PaymentPage'
import LoginDetails from './LoginDetails'
import Register from './Register'
import { SingleProductPage } from './SingleProductPage'
import { EarbudPage } from './ProductPages/EarbudPage'
import { HeadPhonePage } from './ProductPages/HeadPhonePage'
import { SpeakerPage } from './ProductPages/SpeakerPage'
import { RequiredAuth } from './RequiredAuth'
import { Admin } from './Admin'
import { AllProducts } from '../components/AdminPage/AllProducts'
import { AllUsers } from '../components/AdminPage/AllUsers'
import { AddNewProd } from '../components/AdminPage/AddNewProd'
import { BluetoothHead } from './ProductPages/BluetoothHead'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/earbud' element={<EarbudPage />} />
      <Route path='/speaker' element={<SpeakerPage />} />
      <Route path='/headphone' element={<HeadPhonePage />} />
      <Route path='/watch' element={<WatchPage />} />
      {/* /bluetoothHeadphone */}
      <Route path='/bluetoothHeadphone' element={<BluetoothHead/>} />
      <Route path='/cart' element={
        <RequiredAuth>
          <CartPage />
        </RequiredAuth>
      } />
      <Route path='/address' element={
        <RequiredAuth>
          <AddressPage />
        </RequiredAuth>


      } />

      <Route path='/login' element={<LoginDetails />} />
      <Route path='/register' element={<Register />} />
      <Route path='/product/:id' element={
        <RequiredAuth>
          <SingleProductPage />
        </RequiredAuth>
      } />

      <Route path='/admin' element={
      <RequiredAuth>
        <Admin />
      </RequiredAuth>
    } />
     <Route path='/admin/allproduct' element={
      <RequiredAuth>
        <AllProducts />
      </RequiredAuth>
    } />

    <Route path='/admin/allusers' element={
      <RequiredAuth>
        <AllUsers />
      </RequiredAuth>
    } /> 

<Route path='/admin/addnewprod' element={
      <RequiredAuth>
        <AddNewProd />
      </RequiredAuth>
    } /> 

<Route path='/admin/edit/:id'  element={<RequiredAuth>
  <AddNewProd/>
</RequiredAuth>}   />




    </Routes>
  )
}
