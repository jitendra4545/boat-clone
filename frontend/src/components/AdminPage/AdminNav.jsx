
import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetData } from '../../redux/AppReducer/action'
import { GetUser } from '../../redux/Authreducer/action'

export const AdminNav = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(GetData())
       dispatch(GetUser())
    },[])
  return (
    <Box h='10vh' position={'sticky'} top='0' zIndex={'1000'} bg={'white'} >
    navbar
   </Box>
  )
}