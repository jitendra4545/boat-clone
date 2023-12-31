import { Box, Button, Image, Table, Tbody, Td, Th, Thead, Tr, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AdminNav } from './AdminNav'
import { AdminSidebar } from './AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteData, GetData } from '../../redux/AppReducer/action'
import { Link, useNavigate } from 'react-router-dom'
import { Loader } from '../Loader'

export const AllProducts = () => {
    const navigate=useNavigate()
const dispatch=useDispatch()
const [search, setSearch] = useState("")
    const { isLoading, isError, product } = useSelector((store) => store.AppReducer)
    console.log(product)
     const toast=useToast()     
const handleDelete=(id)=>{
 dispatch(DeleteData({id})).then(()=>{
    dispatch(GetData({search}))
    toast({
        title: 'Product Deleted',
        description: "Your Product Deleted Successfully",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position:'top'
      })
 })
 console.log("erreerer",id)
}




    return (
        <Box>
            <AdminNav />
            <Box display={'grid'} gap='' gridTemplateColumns={'230px auto'}>
                <Box >
                    <AdminSidebar />
                </Box>
                <Box p='0px 15px'  >
                 {
                    isLoading ? <Loader/> :   <Table border={'2px solid blue'}>
                    <Thead bg='blue.900' zIndex={'500'} position={'sticky'} top={'10vh'}>
                        <Tr fontWeight={'bold'}  >
                            <Th color={'white'} fontSize={'20px'}>IMAGE</Th>
                            <Th color={'white'} fontSize={'20px'}>TITLE</Th>
                            <Th color={'white'} fontSize={'20px'}>PRICE</Th>
                            <Th color={'white'} fontSize={'20px'}>RATING</Th>
                            <Th color={'white'} fontSize={'20px'}>CATEGORY</Th>
                            <Th color={'white'} fontSize={'20px'}>DISCOUNT</Th>
                            <Th color={'white'} fontSize={'20px'}>DELETE</Th>
                            <Th color={'white'} fontSize={'20px'} paddingTop={'20px'} paddingBottom={'20px'} >EDIT</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            product?.map((el, i) => {
                                return <Tr fontWeight={'bold'} bg={`${i % 2 == 0 ? "white" : "skyblue"}`} color={'grey'}>
                                    <Td >
                                        <Image src={el.product_item__primary_image} />
                                    </Td>
                                    <Td>
                                        {el.product_item_meta__title}
                                    </Td>
                                    <Td>
                                        {el.price} /-
                                    </Td>
                                    <Td>
                                        {el.rating__stars?el.rating__stars:"Be the first to Review"}
                                    </Td>
                                    <Td>
                                        {el.category}
                                    </Td>
                                    <Td>
                                        {"75%"}
                                    </Td>
                                    <Td>
                                        <Button onClick={()=>handleDelete(el._id)}>Delete</Button>
                                    </Td>
                                    <Td>
                                       <Link to={`/admin/edit/${el._id}`}><Button  >Edit</Button>
                                       </Link> 
                                    </Td>
                                </Tr>
                            })
                        }
                    </Tbody>
                </Table>
                 }   
                </Box>
            </Box>
        </Box>
    )
}
