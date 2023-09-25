import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsBagPlusFill, BsCartPlus } from 'react-icons/bs'
import { CgMore } from 'react-icons/cg'
import { FiUsers } from 'react-icons/fi'
import {MdDashboard} from 'react-icons/md'
import { RiLogoutBoxLine } from 'react-icons/ri'
export const AdminSidebar = () => {
  return (
    <Box h='90vh' bg='blue.900'   border={'1px solid green'}>
    <Box bg='blue.900'  display={'grid'} gap="6" color={'white'}  >
        <Link to='/admin'>
         <Box _hover={{bg:"white",color:"blue.900"}} mt='20px' p='10px 20px' display={'flex'} gap='4' fontSize={'20px'} justifyContent={'left'} alignItems={'center'} >
         <MdDashboard  />  <Heading fontSize={'lg'}>  Dashboard</Heading>
         </Box>
         </Link>
        <Link to='/admin/allproduct' >
         <Box _hover={{bg:"white",color:"blue.900"}} p='10px 20px' display={'flex'} gap='4' fontSize={'20px'} justifyContent={'left'} alignItems={'center'} >
         <BsCartPlus/>  <Heading fontSize={'lg'}>  Products</Heading>
         </Box>
         </Link>
         <Box _hover={{bg:"white",color:"blue.900"}} p='10px 20px' display={'flex'} gap='4' fontSize={'20px'} justifyContent={'left'} alignItems={'center'} >
         <BsBagPlusFill/>  <Heading fontSize={'lg'}>  Add New Product</Heading>
         </Box>
         <Box _hover={{bg:"white",color:"blue.900"}} p='10px 20px' display={'flex'} gap='4' fontSize={'20px'} justifyContent={'left'} alignItems={'center'} >
         <FiUsers/>  <Heading fontSize={'lg'}>  Users</Heading>
         </Box>
         <Box _hover={{bg:"white",color:"blue.900"}} p='10px 20px' display={'flex'} gap='4' fontSize={'20px'} justifyContent={'left'} alignItems={'center'} >
         <CgMore/>  <Heading fontSize={'lg'}>  More</Heading>
         </Box>
         <Box _active={{bg:"red"}} _hover={{bg:"white",color:"blue.900"}} p='10px 20px' display={'flex'} gap='4' fontSize={'20px'} justifyContent={'left'} alignItems={'center'} >
         <RiLogoutBoxLine/>  <Heading fontSize={'lg'}>  Logout</Heading>
         </Box>
    </Box>
</Box>
  )
}
