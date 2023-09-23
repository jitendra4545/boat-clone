import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { GetData } from '../../redux/AppReducer/action'
import { ProductNav } from '../../components/ProductPage/ProductNav'
import { ProductCard } from '../../components/ProductPage/ProductCard'
import { Footer } from '../Footer'
import { Loader } from '../../components/Loader'

export const WatchPage = () => {

  const dispatch = useDispatch()
  const { product, isLoading, isError } = useSelector((store) => store.AppReducer)


  useEffect(() => {
    dispatch(GetData())

  }, [])


  console.log(product)
  
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <Box   w={{base:"98%",md:"95%",lg:"90%"}} m='auto'>

        <Box>
          <ProductNav />
        </Box>

        {
          isLoading ?<Loader/>

          :
          <Box mt={'30px'} display={'grid'} gap='4'  gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}}>
          {
            product?.map((el,i) => {
              return <>
               {
                el.category=="watch" && <ProductCard {...el} />
               }
              </>
                         
              
            })
          }

        </Box>

        }
      </Box>

<Footer/>

    </Box>
  )
}
