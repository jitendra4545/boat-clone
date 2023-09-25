import React, { useEffect } from 'react'
import { Slider } from '../components/Homepage/Slider'
import { Slider2 } from '../components/Homepage/Slider2'
import { Box, Text } from '@chakra-ui/react'
import { Slider4 } from '../components/Homepage/Slider4'
import { Slider3 } from '../components/Homepage/Slider3'
import { Navbar } from '../components/Navbar'
import { Footer } from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { GetUser } from '../redux/Authreducer/action'
// import { Slider1 } from '../components/Homepage/Slider1'
import {store} from '../redux/store'
export const HomePage = () => {

  const dispatch=useDispatch()


  useEffect(()=>{
    dispatch(GetUser())
   },[])

   


  

  //  console.log("userDataggfhggf",users,cart[0]?.UserId)

  return (
    <Box>
      <Navbar/>
        <Slider/>
        {/* Shop by Lifestyle    */}
        <Box textAlign={'left'}>
          <Text p='20px 10px' fontWeight={'semibold'} fontSize={'25px'}>Shop by <span style={{fontWeight:'bold',color:'red'}}>Categories</span></Text>
        <Slider2/>
        <Text p='20px 10px' fontWeight={'semibold'} fontSize={'25px'}>Shop by <span style={{fontWeight:'bold',color:'red'}}>Lifestyle</span></Text>
        <Slider3/>
        
        <Slider4/>
        </Box>
        
       <Footer/> 
    </Box>
  )
}
