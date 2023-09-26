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
    <Box  >
    <Box  boxShadow={' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);'} bg={'blue.900'} color={'white'} position={'fixed'} h='90vh'   left={0} display={'grid'} gap={'6'}  >
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
         <Link to='/admin/addnewprod'>
         <Box _hover={{bg:"white",color:"blue.900"}} p='10px 20px' display={'flex'} gap='4' fontSize={'20px'} justifyContent={'left'} alignItems={'center'} >
         <BsBagPlusFill/>  <Heading fontSize={'lg'}>  Add New Product</Heading>
         </Box>
         </Link>
         
         <Link to='/admin/allusers'>
         <Box _hover={{bg:"white",color:"blue.900"}} p='10px 20px' display={'flex'} gap='4' fontSize={'20px'} justifyContent={'left'} alignItems={'center'} >
         <FiUsers/>  <Heading fontSize={'lg'}>  Users</Heading>
         </Box>
         </Link>
         <Link>
         <Box _hover={{bg:"white",color:"blue.900"}} p='10px 20px' display={'flex'} gap='4' fontSize={'20px'} justifyContent={'left'} alignItems={'center'} >
         <CgMore/>  <Heading fontSize={'lg'}>  More</Heading>
         </Box>
         </Link>
         <Link>
         <Box mb={'20px'}  _hover={{bg:"white",color:"blue.900"}} p='10px 20px' display={'flex'} gap='4' fontSize={'20px'} justifyContent={'left'} alignItems={'center'} >
         <RiLogoutBoxLine/>  <Heading fontSize={'lg'}>  Logout</Heading>
         </Box>
         </Link>
         
    </Box>
</Box>
  )
}
