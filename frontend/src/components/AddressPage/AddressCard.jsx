import { Box, Button, Checkbox, Image, Radio, Td, Text, Tr, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { DeleteAddress, GetADdress } from '../../redux/AddressReducer/action'
import { MdDeleteForever } from 'react-icons/md'
export const AddressCard = (el) => {

  const [CurrAddress, setCurrAddress] = useState(false)
  const dispatch = useDispatch()
  console.log(CurrAddress)
  const toast = useToast()
  const handleRemove = (id) => {
    dispatch(DeleteAddress({ id })).then(() => {
      dispatch(GetADdress())
      toast({
        title: 'Address Removed Successfully ',
        description: "Your Address Removed Successfully   ",
        status: 'success',
        position: "top",
        duration: 5000,
        isClosable: true,
      })

    })
  }

  return (
    
    <Tr>
      <Td>

        <Text>   <Radio mr='10px'

          onChange={(e) => setCurrAddress(e.target.checked)}
          size='md' colorScheme='green'>

        </Radio> {el.name}</Text>
      </Td>
      <Td>
        {el.address}, {el.city}, {el.state}
      </Td>
      <Td>
        {el.pincode}
      </Td>
      <Td>
        {el.mobile}
      </Td>
      <Td > <Button onClick={() => handleRemove(el._id)} bg='red' color={'white'} fontSize={'xl'} _hover={{ 'bg': "red" }}>
        <RiDeleteBin6Fill />
      </Button></Td>
    </Tr>
  )
}
