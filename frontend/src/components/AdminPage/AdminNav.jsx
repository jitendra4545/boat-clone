
import { Avatar, Box, Button, Center, Flex, HStack, Heading, IconButton, Image, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetData } from '../../redux/AppReducer/action'
import { GetUser, SingleUserData, UserLogout } from '../../redux/Authreducer/action'
import { Link, useNavigate } from 'react-router-dom'
import { FiBell, FiChevronDown } from 'react-icons/fi'

export const AdminNav = () => {
const [search, setSearch] = useState("")
   const { ActiveUser } = useSelector((store) => store.AuthReducer)

   console.log("Active User", ActiveUser,search)


    const dispatch=useDispatch()
const navigate=useNavigate()
    const handleLogout=()=>{
      dispatch(UserLogout())
      localStorage.removeItem("token")
      // window.location.reload()
      navigate("/")
       
    }


    useEffect(()=>{
       dispatch(GetData(search))
       dispatch(GetUser())
       dispatch(SingleUserData())
    },[search])
  return (
    <Box  position={'sticky'} top='0' zIndex={'1000'} bg={'white'} >
    <Box  >
       <Box padding={'8px 40px'} boxShadow={"xl"} display={'flex'} justifyContent={"space-between"}>
           <Box>
           
            <Link to='/'>  <Image w='70%' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' /></Link>

           
           </Box>
           <Box display={'flex'}>
          <Input onChange={(e)=>setSearch(e.target.value)} placeholder='Search products .....' /><Button mr='30px'>Search</Button>
          
           </Box>
           <Box>
           <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{ActiveUser[0]?.name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={ 'white'}
              borderColor={ 'gray.700'}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
           </Box>
        </Box>   
    </Box>
   </Box>
  )
}
