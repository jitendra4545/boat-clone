import { Box, Button, Image, Select, Td, Text, Tr, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteCart, GetCart, UpdateCart } from '../../redux/CartReducer/action'
import { useNavigate } from 'react-router-dom'
import { MdDeleteForever } from 'react-icons/md'

export const CartCard = (el) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toast = useToast()

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
        // <Box bg='white' borderRadius={'10px'} mb='10px'>
        //     <Box display={'grid'} gridTemplateColumns={"repeat(4,1fr)"} p='5px 10px' justifyContent={'space-between'} alignItems={'center'} gap='4' >

        //         <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        //             <Image w='50%' src={el.productID.product_item__primary_image} />
        //             <Box ml='10px' display={'grid'} gap={{ base: "1", md: "3", lg: "3" }} >
        //                 <Text fontSize={'12px'}>{el.productID.product_item_meta__title}</Text>
        //                 <Text fontSize={'12px'}>{el.productID.priority}</Text>
        //                 <button onClick={() => handleRemove(el._id)} style={{ background: 'red', color: "white", fontWeight: "normal", borderRadius: '5px', padding: "0px 5px" }}>Remove</button>
                       
        //             </Box>
        //         </Box>

        //         <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        //             <Box display={'flex'} >
        //                 <Button onClick={() => handleQuantity(el.qty - 1, el._id)}>-</Button>
        //                 <Text p='10px'>{el.qty}</Text>
        //                 <Button onClick={() => handleQuantity(el.qty + 1, el._id)} >+</Button>


        //             </Box>
        //         </Box>
        //         <Box >
        //             <Text textAlign={'center'}>Rs. {el.productID.price}</Text>
        //         </Box>
        //         <Box >
        //             <Text textAlign={'center'}>Rs. {(el.productID.price * el.qty)}</Text>
        //         </Box>
        //     </Box>
        // </Box>

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
                         <Button bg={'white'} boxShadow={'md'} onClick={() => handleQuantity(el.qty - 1, el._id)}>-</Button>
                         <Text p='10px'>{el.qty}</Text>
                         <Button bg={'white'} boxShadow={'md'} onClick={() => handleQuantity(el.qty + 1, el._id)} >+</Button>
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
