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
        name: "Products",
        link: "/product"
    },
    {
        name: "Daily Deals",
        link: ""
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
                    <DrawerBody mt={'80px'} display={'grid'}   >

                        {
                            navItems.map((el, i) => {
                                return <Menu key={i} >
                                    <Link to={el.link}> <MenuButton onClick={onClose} w='100%' color='red' bg={'white'} _hover={{ backgroundColor: "red", color: 'white' }} border={'2px dashed red'} as={Button} >
                                        {el.name}
                                    </MenuButton>
                                    </Link>
                                </Menu>

                            })
                        }


                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


        </Box>
    )
}
