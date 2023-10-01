import { Box, Button, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useRazorpay from "react-razorpay";
import { useSelector } from 'react-redux';
export const AddressPaymentCard = ({ total }) => {
  const [DeliveryCharge, SetDeliveryCharge] = useState(0)
  console.log("dsds", DeliveryCharge, total)

  const {Address, isLoading, isError}=useSelector((store)=>store.AddressReducer)

  // const [GrandTotal,setGrandTotal]=useState(total+DeliveryCharge)
const navigate=useNavigate()
const Razorpay = useRazorpay();
const handlePayment=()=>{
  
 
    if(total === ""){
      alert("please enter amount");
      }else{
        var options = {
          key: "rzp_test_xH9YL54czoLC7V",
          key_secret:"9N9w6RIxCGi6rb2SpbaHLMgM",
          amount: (total *100),
          currency:"INR",
          name:"STARTUP_PROJECTS",
          description:"for testing purpose",
          handler: function(response){
            alert("Payment Successful   Id :",response.razorpay_payment_id);

            navigate("/")
          },
          
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();

      }
  

}


  return (
    <Box fontWeight={'bold'} m="15px 0px">
      <FormLabel m="15px 0px">SHIPPING</FormLabel>
      <Select onChange={(e) => SetDeliveryCharge(+e.target.value)} m="20px 0px">
        <option value="">Select Delivery Type</option>
        <option value={0}>Normal (Rs. 0/-)</option>
        <option value={40}>2 Day Delivery (Rs. 40/-)</option>
        <option value={80}>One Day Delivery (Rs. 80/-)</option>
      </Select>
      <FormLabel m="0px 0px">PROMO CODE</FormLabel>
      <Input m="15px 0px" />

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
        <Text >Rs. {total + DeliveryCharge} /-</Text>
      </Box>
 { Address.length>0 ? <Button onClick={handlePayment} bg='green' _hover={{ bg: "green" }} color={'white'} mt='20px' w='100%'>PROCEED TO PAYMENT</Button>

:
<Button disabled bg='grey' _hover={{ bg: "grey" }} color={'white'} mt='20px' w='100%'>ADD ADDRESS TO CONTINUE</Button>
}   
    </Box>
  )
}
