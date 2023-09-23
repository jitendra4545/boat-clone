import { Box, Button, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'

export const CartPaymentCard = ({total}) => {
  
  return (
    <Box fontWeight={'bold'} m="20px 0px">
      <FormLabel m="20px 0px">SHIPPING</FormLabel>
      <Select m="20px 0px">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </Select>
      <FormLabel m="0px 0px">PROMO CODE</FormLabel>
      <Input m="20px 0px" />

      <Button bg='red' color={'white'} mb='20px'>APPLY</Button>

      <hr />

      <Box mt='20px' fontWeight={'bold'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>

        <Text>TOTAL COST </Text>
        <Text textAlign={'right'}>{total} </Text>
      </Box>
      <Button bg='green' color={'white'} mt='20px' w='100%'>CHECKOUT</Button>
    </Box>
  )
}
