import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'

import { AllRoutes } from './AllRoutes'
import { Link } from 'react-router-dom'
import { AdminSidebar } from '../components/AdminPage/AdminSidebar'
import { AdminNav } from '../components/AdminPage/AdminNav'
export const Admin = () => {
  return (
   <Box>
     <AdminNav/>
      <Box  display={'grid'} gridTemplateColumns={'300px auto'}>
        <AdminSidebar/>
        <Box bg='blue.700' border={'1px solid blue'} >
        
        </Box>
      </Box>
   </Box>
  )
}
