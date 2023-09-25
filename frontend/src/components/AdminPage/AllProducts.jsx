import { Box, Image, Table, Tbody, Td, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AdminNav } from './AdminNav'
import { AdminSidebar } from './AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { GetData } from '../../redux/AppReducer/action'

export const AllProducts = () => {
 
    const {isLoading,isError,product}=useSelector((store)=>store.AppReducer)
    console.log(product)
  return (
    <Box>
    <AdminNav/>
     <Box  display={'grid'} gridTemplateColumns={'300px auto'}>
       <AdminSidebar/>
       <Box bg='blue.700' border={'1px solid blue'} >
            <Table>
                <Thead>
                    <Tr>
                      
                    </Tr>
                </Thead>
                <Tbody>
                     {
                        product?.map((el,i)=>{
                            return <Tr>
                                <Td fontWeight={'bold'}>
                                    <Image src={el.product_item__primary_image}/>
                                </Td>
                                <Td>
                                    {el.product_item_meta__title}
                                </Td>
                                <Td>
                                    {el.price}
                                </Td>
                                <Td>
                                    {el.rating__stars}
                                </Td>
                                <Td>
                                    {el.category}
                                </Td>
                                <Td>
                                    {el.price}
                                </Td>
                                <Td>
                                    {el.rating__stars}
                                </Td>
                                <Td>
                                    {el.category}
                                </Td>
                            </Tr>
                        })
                     } 
                </Tbody>
            </Table>
       </Box>
     </Box>
  </Box>
  )
}
