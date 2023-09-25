import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Select, Text, border, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'

import { Loader } from '../components/Loader'
import { Slider4 } from '../components/Homepage/Slider4'
import { AddressPaymentCard } from '../components/AddressPage/AddressPaymentCard'
import { AddAddress, GetADdress } from '../redux/AddressReducer/action'
import { AddressCard } from '../components/AddressPage/AddressCard'

export const AddressPage = () => {
   const [name, setName] = useState("")
const [mobile, setMobile] = useState("")
const [address, setAddress] = useState("")
const [pincode, setPincode] = useState("")
const [landmark, setLandmark] = useState("")
const [city, setCity] = useState("")
const [state, setState] = useState("")

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const dispatch = useDispatch()
  const { cart } = useSelector((store) => store.CartReducer)
  const [TotalPrice, setTotalPrice] = useState(0)
  const toast=useToast()
  
  let total = 0
  const handleTotal = () => {
    cart?.map((el) => {
      return (total += el.productID?.price * el.qty)
    })
    setTotalPrice(total)
  }

  console.log("dssdhsdf", TotalPrice)
  console.log("Update,reducer", cart)

   const {Address, isLoading, isError}=useSelector((store)=>store.AddressReducer)

   console.log("dfdf",Address)

  const handleAddress=async()=>{
 dispatch(AddAddress({name,mobile,pincode,address,city,state,landmark})).then(()=>{
  dispatch(GetADdress())
  toast({
    title: 'Address Successfully Added',
    description: "Congratulatios! You are Few step away from your Order   ",
    status: 'success',
    duration: 5000,
    position: 'top',
    isClosable: true,
  })
  
  onClose()
 })
    
  }

useEffect(()=>{
  dispatch(GetADdress())
},[])

  useEffect(() => {
    handleTotal()
     
  }, [cart])

  return (
    <Box bg='' h='auto'  >
      <Box position={'sticky'} top='0' zIndex={'1000'} bg='grey' >
        <Navbar />
      </Box>
      <Box m='auto' h='' p='30px 0px'>
        
          <Grid
            w={{ base: "99%", md: "95%", lg: "90%" }}
            m='auto'


            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}
            gap={0}
          >


            <GridItem bg='skyblue' boxShadow={'lg'} borderRadius={'10px 0px 0px 10px'} p={{ base: "10px 0px", md: "20px 20px", lg: "30px 70px" }} colSpan={4}  >
         {
          Address.length>0 &&<> <Flex mb='20px' justifyContent={'center'}>
          <Box>
            <Heading fontSize={'2xl'}  >Your Address</Heading>
          </Box>

        </Flex>
        <hr />
        <Box mt='20px' fontWeight={'bold'} gap='5' textAlign={'left'} display={'grid'} gridTemplateColumns={'repeat(5,1fr)'}>
          <Text>Name</Text>

          <Text>Address</Text>
          <Text>Pincode</Text>
          <Text>Mobile</Text>
          <Text>Choose/Remove</Text>
        </Box>
        </>
         }     

              {
                isLoading ? <Loader />

                  :
                  <Box mt='20px'>

                    {Address?.map((el, i) => {
                      return <AddressCard {...el}/>
                    })}
                  </Box>
                  
              }

              <Button ref={btnRef} onClick={onOpen} color='red'> + ADD NEW ADDRESS</Button>







              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Add Your Address</DrawerHeader>

                  <DrawerBody>
                  <FormControl isRequired>
                    <FormLabel isRequired>Enter Name</FormLabel>
                    <Input onChange={(e)=>setName(e.target.value)} border={'none'}  borderBottom={'2px solid blue'} placeholder='Full Name' />
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>Mobile</FormLabel>
                    <Input onChange={(e)=>setMobile(e.target.value)} border={'none'}  borderBottom={'2px solid blue'} type='number' placeholder='Enter Mobile No' />
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input onChange={(e)=>setAddress(e.target.value)} border={'none'}  borderBottom={'2px solid blue'} placeholder='Enter Full Address' />
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>City</FormLabel>
                    <Input onChange={(e)=>setCity(e.target.value)} border={'none'}  borderBottom={'2px solid blue'} placeholder='Your city Name' />
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>State</FormLabel>
                    <Select border={'none'} onChange={(e)=>setState(e.target.value)} borderBottom={'2px solid blue'}>
                      <option value="">Select Your State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
                    </Select>
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>LandMark</FormLabel>
                    <Input border={'none'} onChange={(e)=>setLandmark(e.target.value)} borderBottom={'2px solid blue'} placeholder='Enter Your Lankmark .....' />
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>Pin Code</FormLabel>
                    <Input border={'none'} onChange={(e)=>setPincode(e.target.value)}  borderBottom={'2px solid blue'} type='number' placeholder='Enter Pin code' />
                    </FormControl>
                    
                  </DrawerBody>

                  <DrawerFooter>
                    
                    <Button onClick={handleAddress} colorScheme='blue'>SUBMIT</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>





            </GridItem>
            <GridItem bg="blackAlpha.200" position={{ base: "", md: "", lg: "fixed" }} right={{ base: "", md: "", lg: "35px" }} p={{ base: "10px 50px", md: "20px 10px", lg: "30px 10px" }} boxShadow={'lg'} h={{ base: "auto", md: "auto", lg: 'auto' }}  rowSpan={2}  >

              <Box mb='20px' >
                <Box>
                  <Heading textAlign={'center'} fontSize={'2xl'}>Order Summary</Heading>
                </Box>

              </Box>
              <hr />
              <Box mt='15px' fontWeight={'bold'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>

                <Text>ITEMS {cart?.length}</Text>
                <Text textAlign={'right'}>Rs. {TotalPrice} </Text>
              </Box>
              <Box mt='15px'>
                <AddressPaymentCard total={TotalPrice} />
              </Box>

            </GridItem>
          </Grid>
        

      </Box>
      <Box p='50px 30px' bg="white">
        <Slider4 />
      </Box>
    </Box>
  )
}
