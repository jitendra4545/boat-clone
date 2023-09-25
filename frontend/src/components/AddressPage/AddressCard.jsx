import { Box, Button, Checkbox, Image, Radio, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import { DeleteAddress, GetADdress } from '../../redux/AddressReducer/action'
export const AddressCard = (el) => {

    const [CurrAddress, setCurrAddress] = useState(false)
const dispatch=useDispatch()
    console.log(CurrAddress)
const toast=useToast()
    const handleRemove=(id)=>{
        dispatch(DeleteAddress({id})).then(()=>{
            dispatch(GetADdress())
            toast({
                title: 'Address Removed Successfully ',
                description: "Your Address Removed Successfully   ",
                status: 'success',
                position:"top",
                duration: 5000,
                isClosable: true,
              })
              
        })
    }

    // const {Address}=useSelector((store)=>store.AddressReducer)
  return (
    <Box bg='white' borderRadius={'10px'} mb='10px'>
    <Box display={'grid'} gridTemplateColumns={"repeat(5,1fr)"} p='10px 10px' justifyContent={'space-between'} alignItems={'center'} gap='5' >
           <Box >
            
               <Text>{el.name}</Text>
           </Box>
           <Box>
           <Text>{el.address}, {el.city}, {el.state}</Text>
           </Box>
           <Box>
           <Text>{el.pincode}</Text>
           </Box>
           <Box>
           <Text>{el.mobile}</Text>
           </Box>
           <Box display={'flex'} gap='4'>
            <Button onClick={()=>handleRemove(el._id)} bg='red' color={'white'} fontSize={'xl'}  _hover={{'bg':"red"}}>
            <RiDeleteBin6Fill/>
            </Button>
            <Radio
                
                   onChange={(e)=>setCurrAddress(e.target.checked)}
                         size='md' colorScheme='green'>
                            Select Address
                        </Radio>
            <Box>
                       
                    </Box>
           </Box>

      </Box>
</Box>
  )
}
