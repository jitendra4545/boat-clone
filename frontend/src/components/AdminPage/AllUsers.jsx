import { Box, Button, Table, Tbody, Td, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminNav } from './AdminNav'
import { AdminSidebar } from './AdminSidebar'
import { GetUser, UserDelete } from '../../redux/Authreducer/action'
import { Loader } from '../Loader'

export const AllUsers = () => {
  const toast=useToast()
  const {isLoading,isError,users}=useSelector((store)=>store.AuthReducer)
  console.log(users)
  
const dispatch=useDispatch()
  const handleDelete=async(id)=>{
   dispatch(UserDelete({id})).then(()=>{
    dispatch(GetUser())
    toast({
      title: 'User Deleted',
      description: "The user Deleted Successfully",
      status: 'error',
      duration: 5000,
      isClosable: true,
      position:'top'
    })
   })    
  }



return (
  <Box>
  <AdminNav/>
   <Box  display={'grid'} gap='5' gridTemplateColumns={'230px auto'}>
     <Box >
     <AdminSidebar/>
     </Box>
    
     <Box  p='0px 15px' >
     {
                isLoading? <Loader/>

                :
          <Table border={'2px solid blue'}>
              <Thead bg='blue.900' zIndex={'500'} position={'sticky'} top={'10vh'}>
                  <Tr fontWeight={'bold'}  >
                    <Th color={'white'} fontSize={'20px'}>NAME</Th>
                    <Th color={'white'} fontSize={'20px'}>EMAIL</Th>
                    <Th color={'white'} fontSize={'20px'}>MOBILE</Th>
                    <Th color={'white'} fontSize={'20px'}>ACTIVE</Th>
                    <Th color={'white'} fontSize={'20px'}>ADMIN</Th>
                    <Th color={'white'} fontSize={'20px'}>CREATED AT</Th>
                    {/* <Th color={'white'} fontSize={'20px'}>DISCOUNT</Th> */}
                    
                    <Th color={'white'} fontSize={'20px'} paddingTop={'20px'} paddingBottom={'20px'} >DELETE</Th>
                  </Tr>
              </Thead>
             
<Tbody>
                   {
                      users?.map((el,i)=>{
                          return <Tr fontWeight={'bold'} bg={`${i%2==0?"white":"skyblue"}`} color={'grey'}>
                              <Td >
                                 {el.name}
                              </Td>
                              <Td>
                                  {el.email}
                              </Td>
                              <Td>
                                  {el.mobile}
                              </Td>
                              <Td>
                                  {el.isActive ? "Active":"In-Active"}
                              </Td>
                              <Td>
                                {el.isAdmin?"True":"False"}
                              </Td>
                              <Td>
                                  {el.createdAt}
                              </Td>
                              
                              <Td>
                                  <Button onClick={()=>handleDelete(el._id)}>Delete</Button>
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
