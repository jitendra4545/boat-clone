
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
    <Box h='10vh' border={'2px solid red'}>
    navbar
   </Box>
  )
}
