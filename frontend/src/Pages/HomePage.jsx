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
import { store } from '../redux/store'
import { Slider5 } from '../components/Homepage/Slider5'
import { Slider6 } from '../components/Homepage/Slider6'
import { Slider7 } from '../components/Homepage/Slider7'
export const HomePage = () => {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(GetUser())
  }, [])






  //  console.log("userDataggfhggf",users,cart[0]?.UserId)

  return (
    <Box>
      <Navbar />
      <Slider />
      {/* Shop by Lifestyle    */}
      <Box textAlign={'left'}>
        <Text p='20px 10px' fontWeight={'semibold'} fontSize={'25px'}>Explore<span style={{ fontWeight: 'bold', color: 'red' }}>Bestsellers</span></Text>
        <Slider5 />
        <Text p='20px 10px' fontWeight={'semibold'} fontSize={'25px'}>Shop by <span style={{ fontWeight: 'bold', color: 'red' }}>Categories</span></Text>
        <Slider2 />
        <Text p='20px 10px' fontWeight={'semibold'} fontSize={'25px'}>Shop by <span style={{ fontWeight: 'bold', color: 'red' }}>Lifestyle</span></Text>
        <Slider3 />
        <Text p='20px 10px' fontWeight={'semibold'} fontSize={'25px'}>Shop by <span style={{ fontWeight: 'bold', color: 'red' }}>Lifestyle</span></Text>
        <Slider7/>
        <Slider4 />

        <Text p='20px 10px' fontWeight={'semibold'} fontSize={'25px'}>All <span style={{ fontWeight: 'bold', color: 'red' }}>Blogs</span></Text>
        <Slider6 />
        
      </Box>

      <Footer />
    </Box>
  )
}
