import { Box, Flex, Grid, GridItem, Heading, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { GetCart } from '../redux/CartReducer/action'
import { CartCard } from '../components/CartPage/CartCard'
import { CartPaymentCard } from '../components/CartPage/CartPaymentCard'
import { CartNav } from '../components/CartPage/CartNav'
import { Loader } from '../components/Loader'
import { Footer } from './Footer'

export const CartPage = () => {
  const dispatch = useDispatch()
  const { cart, isLoading, isError } = useSelector((store) => store.CartReducer)
 const [TotalPrice, setTotalPrice] = useState(0)
let total=0
 const handleTotal=()=>{
   cart.map((el)=>{
return (total+=el.productID.price*el.qty)
   })
   setTotalPrice(total)
}

console.log("dssdhsdf",TotalPrice)
  console.log("Update,reducer", cart)
  useEffect(() => {
    dispatch(GetCart())
    handleTotal()
  }, [])

  return (
    <Box bg='blue.100'>
      <Box position={'sticky'} top='0' zIndex={'1000'} bg='grey' >
        <Navbar />
      </Box>
      <Box m='auto' p='30px 0px'>


        <Grid
          w={{ base: "99%", md: "95%", lg: "90%" }}
          m='auto'

          // templateRows='repeat(2, 1fr)'
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}
          gap={0}
        >

          {/* <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' /> */}
          <GridItem bg='white' boxShadow={'lg'} borderRadius={'10px 0px 0px 10px'} p={{ base: "10px 0px", md: "20px 20px", lg: "30px 70px" }} colSpan={4}  >
            <Flex mb='20px' justifyContent={'space-between'}>
              <Box>
                <Heading fontSize={'2xl'}  >Your Cart</Heading>
              </Box>
              <Box>
                <Heading fontSize={'2xl'}  >{cart?.length} Items</Heading>
              </Box>
            </Flex>
            <hr />
            <Box mt='20px' fontWeight={'bold'} textAlign={'center'} display={'grid'} gridTemplateColumns={'repeat(4,1fr)'}>
              <Text>Product Details</Text>

              <Text>Quantity</Text>
              <Text>Price</Text>
              <Text>Total Price</Text>
            </Box>
            <Box mt='20px'>
              {
                isLoading && <Loader />
              }
              {cart?.map((el, i) => {
                return <CartCard {...el} />
              })}
            </Box>
          </GridItem>
          <GridItem bg="blackAlpha.200" position={{ base: "", md: "", lg: "fixed" }} right={{ base: "", md: "", lg: "35px" }} p={{ base: "10px 50px", md: "20px 10px", lg: "30px 10px" }} boxShadow={'lg'} h={{ base: "auto", md: "auto", lg: 'auto' }} rowSpan={2}  >

            <Flex mb='20px' justifyContent={'space-between'}>
              <Box>
                <Heading fontSize={'2xl'}>Order Summary</Heading>
              </Box>

            </Flex>
            <hr />
            <Box mt='20px' fontWeight={'bold'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>

              <Text>ITEMS {cart?.length}</Text>
              <Text textAlign={'right'}>Rs. {TotalPrice} </Text>
            </Box>
            <Box mt='20px'>
              <CartPaymentCard total={TotalPrice} />
            </Box>

          </GridItem>
        </Grid>
      </Box>

    </Box>
  )
}
