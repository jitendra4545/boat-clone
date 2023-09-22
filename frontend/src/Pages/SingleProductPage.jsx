import { Box, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetSingleData } from '../redux/AppReducer/action'
import { SingleDataCard } from '../components/ProductPage/SingleDataCard'

export const SingleProductPage = () => {
 const params=useParams()
 const {id}=params
 console.log(id)
  const dispatch=useDispatch()

  useEffect(()=>{
       dispatch(GetSingleData({id}))
  },[])
const {isLoading,singleprod}=useSelector((store)=>store.AppReducer)
console.log(isLoading,singleprod)
  return (
    <Box>
      <Navbar/>
 <Box mt='40px'>
      {
        singleprod&& <SingleDataCard data={singleprod} />
      }
 </Box>
    </Box>
  )
}
