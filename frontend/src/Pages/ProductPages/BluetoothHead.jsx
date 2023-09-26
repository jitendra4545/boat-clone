import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from '../../components/Navbar'
import { ProductNav } from '../../components/ProductPage/ProductNav'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductPage/ProductCard'
import { Footer } from '../Footer'

export const BluetoothHead = () => {
    const { product, isLoading, isError } = useSelector((store) => store.AppReducer)


  


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
            isLoading ?
  <Loader/>
            :
            <Box mt={'30px'} display={'grid'} gap='4'  gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}}>
            {
              product?.map((el,i) => {
                return <>
                 {
                  el.category=="bluetoothHeadphone" && <ProductCard {...el} />
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
