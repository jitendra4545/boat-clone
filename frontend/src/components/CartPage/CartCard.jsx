import { Box, Button, Image, Select, Spinner, Td, Text, Tr, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCart, GetCart, UpdateCart } from '../../redux/CartReducer/action'
import { useNavigate } from 'react-router-dom'
import { MdDeleteForever } from 'react-icons/md'

export const CartCard = (el) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toast = useToast()
    const { cart, isLoading, isError } = useSelector((store) => store.CartReducer)
    const handleQuantity = async (qty, id) => {
        console.log("valggfggfgfghgghgfg", qty, id)
        dispatch(UpdateCart({ qty, id })).then(() => {
            dispatch(GetCart())
        })

    }

    const handleRemove = async (id) => {
        dispatch(DeleteCart({ id })).then(() => {
            dispatch(GetCart())
            toast({
                title: 'Product Removed',
                description: " Product suceesfully removed from your cart   ",
                status: 'success',
                duration: 5000,
                position:"top",
                isClosable: true,
            })

        })
    }


    // console.log("el", el)
    return (
        
        <Tr 
        //  bg={'white'}
          >
           
            <Td >
            <Image w='100px' src={el.productID.product_item__primary_image} />
            </Td>
            <Td>
            <Box display={'grid'} gap={{ base: "1", md: "3", lg: "3" }} >
                         <Text fontSize={{base:'14px',md:'16px',lg:"16px"}} fontWeight={'bold'}>{el.productID.product_item_meta__title}</Text>
                         {/* <Text fontSize={{base:'12px',md:'15px',lg:"15px"}}>{el.productID.priority}</Text> */}
                         <MdDeleteForever onClick={() => handleRemove(el._id)} fontSize={'20px'} color='red'/>
                         {/* <button  style={{ background: 'red', color: "white", fontWeight: "normal", borderRadius: '5px', padding: "0px 5px" }}>Remove</button> */}
             </Box> 
            </Td>
            <Td>
            {/* <Box display={'flex'} justifyContent={'center'} alignItems={'center'}> */}
                    <Box display={'flex'} >
                         
                        {
                            isLoading ? <Button bg={'skyblue'} _hover={{bg:"skyblue"}} disabled boxShadow={'md'} onClick={() => handleQuantity(el.qty - 1, el._id)}>-</Button>:<Button bg={'white'} boxShadow={'md'} onClick={() => handleQuantity(el.qty - 1, el._id)}>-</Button> 
                        }
                        <Text p='10px' fontWeight={'bold'}>{el.qty}</Text>
                        {
                            isLoading ? <Button bg={'skyblue'} _hover={{bg:"skyblue"}} boxShadow={'md'} onClick={() => handleQuantity(el.qty + 1, el._id)} >+</Button>:<Button bg={'white'} boxShadow={'md'} onClick={() => handleQuantity(el.qty + 1, el._id)} >+</Button> 
                        }
                         
                                      </Box>
           
            </Td>
            <Td>
            <Text >Rs. {el.productID.price}</Text>
            </Td>
            <Td>
            <Text>Rs. {(el.productID.price * el.qty)}</Text>
            </Td>
        </Tr>
    )
}
