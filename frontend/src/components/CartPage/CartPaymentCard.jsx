import { Box, Button, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const CartPaymentCard = ({ total }) => {
  const [DeliveryCharge, SetDeliveryCharge] = useState(0)
  console.log("dsds", DeliveryCharge, total)
  return (
    <Box fontWeight={'bold'} m="15px 0px">
      <FormLabel m="15px 0px">SHIPPING</FormLabel>
      <Select disabled onChange={(e) => SetDeliveryCharge(e.target.value)} m="20px 0px">
        <option value=""> Available on payment</option>
        <option value={0}>Normal (Rs. 0/-)</option>
        <option value={40}>2 Day Delivery (Rs. 40/-)</option>
        <option value={80}>One Day Delivery (Rs. 80/-)</option>
      </Select>
      <FormLabel m="0px 0px">PROMO CODE</FormLabel>
      <Input placeholder='You can chhose the option in payment page' disabled m="15px 0px" />

      <Button bg='red' color={'white'} mb='15px'>APPLY</Button>

      <hr />

      <Box mt='15px' mb='10px' display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
        <Box>

          {DeliveryCharge > 0 && <Text fontWeight={'normal'}>Delivery Charge</Text>}
          <Text fontWeight={'normal'}>  Total Price  </Text>
        </Box>
        <Box>
          {DeliveryCharge > 0 && <Text textAlign={'right'}>Rs. {DeliveryCharge} /-</Text>}
          <Text textAlign={'right'}>Rs. {total} /- </Text>
        </Box>

      </Box>
      <hr />
      <Box display={'flex'} p='10px 0px' justifyContent={'space-between'}>
        <Text >Grand Total</Text>
        <Text >Rs. {total - DeliveryCharge} /-</Text>
      </Box>
     <Link to='/address'><Button bg='green' _hover={{ bg: "green" }} color={'white'} mt='20px' w='100%'>CHECKOUT</Button></Link> 
    </Box>
  )
}
