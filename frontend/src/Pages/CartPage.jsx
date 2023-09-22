import { Box, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { GetCart } from '../redux/CartReducer/action'

export const CartPage = () => {
  const dispatch=useDispatch()
  const cart=useSelector((store)=>store.CartReducer.cart)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  console.log("Update,reducer",cart)
  useEffect(()=>{
 dispatch(GetCart())
  },[])

  return (
    <Box>
      <Navbar/>
      CartPage
      
      </Box>
  )
}
