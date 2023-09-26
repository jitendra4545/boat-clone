import {
    Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Tab, TabIndicator, TabList, Tabs, Text, useDisclosure
    ,
    Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ChevronDownIcon, HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { CgProfile } from 'react-icons/cg'
import { BsCart4 } from 'react-icons/bs'
import { useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NavProfile } from './NavbarComponent/NavProfile'
import { NavCart } from './NavbarComponent/NavCart'


const navItems = [

   
    {
        name: "BluetoothHeadphone",
        link: "/bluetoothHeadphone"
    }, {

        name: "Gift With Boat",
        link: ""

    }, {
        name: "Bulk Orders",
        link: ""
    }, {
        name: "More",
        link: ""
    }]

const product=[
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
        link:"/earbud",
        "txt":"True Wireless Earbuds"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668",
        link:"/watch",
        "txt":"Smart Watches"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854",
        link:"/headphone",
        "txt":"Wireless Headphones"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854",
        link:"/speaker",
        "txt":"Party Speakers"
    },
   
]



export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isLargerThan800] = useMediaQuery('(min-width: 1100px)')


    //     const token=useSelector((store)=>store.AuthReducer.token)
    //   console.log(token)

   
    let token = JSON.parse(localStorage.getItem("token"))


    return (
        <Box position="sticky" zIndex={'1000'} bg={'white'} top='0' boxShadow={'lg'}>


            {
                isLargerThan800 ? <Flex    >

                    <Center w='20%'>
                        <Link to='/'>  <Image w='70%' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' /></Link>
                    </Center>
                    <Box
                        flex='1'
                        p="3"
                        display={'flex'} justifyContent={'space-around'}
                    >
                       
                        <Box>
                            <Tabs position="relative" variant="unstyled">
                                <TabList >
                                <Popover  trigger="hover" >
  <PopoverTrigger>
   
        <Tab>Product</Tab>
     
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader></PopoverHeader>
    <PopoverBody>
        <Box display={'grid'} gap='2' gridTemplateColumns={"repeat(2,1fr)"}>
           {product.map((el,i)=>{
            return  <Link to={el.link}> <Box display={'flex'} p='15px' borderRadius={'10px'} _hover={{bg:"green.100"}} justifyContent={'center'} alignItems={'center'}>
                <Box>
                <Image src={el.img} />
                <Text textAlign={'center'}>{el.txt}</Text>
                </Box>
                </Box></Link>
           })}
        </Box>
        
        </PopoverBody>
  </PopoverContent>
</Popover>
                                    {
                                        navItems.map((el) => {
                                            return <Link to={el.link}><Tab _hover={{ fontWeight: 'bold' }} fontSize={'15px'}>{el.name}</Tab></Link>
                                        })
                                    }

                                </TabList>
                                <TabIndicator
                                    mt="-1.5px"
                                    height="3px"
                                    bg="red.500"
                                    borderRadius="1px"

                                />
                            </Tabs>
                        </Box>
                        <Box display={'flex'}>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Search2Icon color='gray.300' />
                                </InputLeftElement>
                                <Input border={'2px solid green'} type='text' placeholder='Search Any Product' />
                            </InputGroup>
                        </Box>










                        <Box display={'flex'} gap='6' justifyContent={'center'} alignItems={'center'}>
                            <NavProfile/>
                           <NavCart/>
                        </Box>
                    </Box>
                </Flex>

                    :

                    <Box display={'flex'} justifyContent={'space-between'} p='15px 20px' >
                        
                        <Box display={'flex'}>
                        <Box mr='15px'>
                            <HamburgerIcon ref={btnRef} colorScheme='teal' onClick={onOpen} fontSize={'20px'} />

                        </Box>
                        <Link to='/'>  <Image w='50%' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' /></Link>
                        </Box>
                        <Box>
                        <Box display={'flex'} gap='6' justifyContent={'center'} alignItems={'center'}>
                           <NavProfile/>
                            <NavCart/>
                        </Box>
                        </Box>
                       
                    </Box>


            }


            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    {/* <DrawerHeader>Create your account</DrawerHeader> */}
                    <DrawerHeader mt='30px' >
                       
                    </DrawerHeader>
                    <DrawerBody mt={'50px'} display={'grid'}   >

                      <Popover  trigger="hover" >
  <PopoverTrigger>
   
        <Button bg='red' _hover={{bg:"red"}} color={'white'} >Product</Button>
     
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader></PopoverHeader>
    <PopoverBody>
        <Box display={'grid'} gap='2' gridTemplateColumns={"repeat(2,1fr)"}>
           {product.map((el,i)=>{
            return <Link to={el.link}> <Box display={'flex'} p='15px' borderRadius={'10px'} _hover={{bg:"green.100"}} justifyContent={'center'} alignItems={'center'}>
            <Box>
            <Image src={el.img} />
            <Text textAlign={'center'}>{el.txt}</Text>
            </Box>
            </Box></Link>
           })}
        </Box>
        
        </PopoverBody>
  </PopoverContent>
</Popover>
                

                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


        </Box>
    )
}
