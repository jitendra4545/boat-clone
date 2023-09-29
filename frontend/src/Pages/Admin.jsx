import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'

import { AllRoutes } from './AllRoutes'
import { Link } from 'react-router-dom'
import { AdminSidebar } from '../components/AdminPage/AdminSidebar'
import { AdminNav } from '../components/AdminPage/AdminNav'
import { Dashboard } from '../components/AdminPage/Dashboard'
export const Admin = () => {
  return (
    <Box>
    <AdminNav/>
     <Box h='90vh' display={'grid'} gap='5' gridTemplateColumns={'230px auto'}>
       <AdminSidebar/>
       <Box  border={'1px solid blue'} >
       <Box color={'white'} bg='blue.900' paddingTop={'20px'} paddingBottom={'20px'} >
                         <Heading textAlign={'center'} fontSize={'20px'}>ADMIN DASHBOARD</Heading> 
                    </Box>
            <Dashboard/>
       </Box>
     </Box>
  </Box>
  )
}
