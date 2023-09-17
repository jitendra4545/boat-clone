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

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()

    }
    let token = JSON.parse(localStorage.getItem("token"))








    console.log(token)
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
                            <Popover>
                                <PopoverTrigger>
                                    <Box >
                                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                            <CgProfile fontSize={'25px'} />
                                        </Box>
                                        <Box>
                                            <Text>Profile</Text>
                                        </Box>
                                    </Box>

                                </PopoverTrigger>
                                <Portal>

                                    {
                                        token ? <PopoverContent>

                                            <PopoverArrow />
                                            <PopoverHeader color={'red'} fontWeight={'bold'}>Hi User !</PopoverHeader>
                                            <PopoverCloseButton />
                                            <PopoverBody>
                                                <Text>Manage Your Order</Text>
                                                <Text mt='15px'>Account</Text>
                                                <Button
                                                    onClick={handleLogout}
                                                    mt='15px' w='100%' color='white' _hover={{ backgroundColor: "red" }} bg='red'>Logout</Button>
                                            </PopoverBody>
                                            {/* <PopoverFooter>This is the footer</PopoverFooter> */}
                                        </PopoverContent>
                                            :
                                            <PopoverContent>

                                                <PopoverArrow />
                                                <PopoverHeader color={'red'} >Hi boAthead!</PopoverHeader>
                                                <PopoverCloseButton color={'red'} />
                                                <PopoverBody textAlign={'center'}>
                                                    <Link to='/login'> <Button w='100%' color='white' _hover={{ backgroundColor: "red" }} bg='red'>Login</Button></Link>

                                                </PopoverBody>
                                                {/* <PopoverFooter>This is the footer</PopoverFooter> */}
                                            </PopoverContent>
                                    }

                                </Portal>
                            </Popover>

                            <Link to='/cart'>   <Box >
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                    <BsCart4 fontSize={'25px'} />
                                </Box>
                                <Box>
                                    <Text>Cart</Text>
                                </Box>
                            </Box></Link>
                        </Box>
                    </Box>
                </Flex>

                    :

                    <Box display={'flex'} justifyContent={'space-between'} p='15px 35px' >
                        <Link to='/'> <Box>
                            <Image w='50%' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' />
                        </Box></Link>
                        <Box>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Search2Icon color='gray.300' />
                                </InputLeftElement>
                                <Input mr='25px' border={'2px solid green'} type='text' placeholder='Search Any Product' />
                            </InputGroup>
                        </Box>
                        <Box>
                            <HamburgerIcon ref={btnRef} colorScheme='teal' onClick={onOpen} fontSize={'20px'} />
                        </Box>
                    </Box>


            }


            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    {/* <DrawerHeader>Create your account</DrawerHeader> */}
                    <DrawerHeader mt='30px' >
                        <Box display={'grid'} p={'15px'} gap='20' gridTemplateColumns={"repeat(2,1fr)"} >


                            <Accordion allowToggle>
                                <AccordionItem>
                                    <AccordionButton h='70px' w='60px'>

                                        <Box borderRadius={'15px'} bg={'red'} color={'white'} p='10px' >
                                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                                <CgProfile fontSize={'25px'} />
                                            </Box>
                                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                                <Text>Profile</Text>
                                            </Box>
                                        </Box>

                                    </AccordionButton>
                                    {
                                        token ? <AccordionPanel pb={4}>
                                            <Text fontWeight={'bold'} color={'red'}>Hi User !</Text>
                                            <Text fontSize={'15px'}>Manage Your Order</Text>
                                            <Text fontSize={'15px'} mt='15px'>Account</Text>
                                            <Button onClick={handleLogout} mt='15px' w='100%' color='white' _hover={{ backgroundColor: "red" }} bg='red'>Logout</Button>
                                        </AccordionPanel>
                                            :
                                            <AccordionPanel pb={4}>
                                                <Text color={'red'} fontSize={'15px'}>Hi boAthead!</Text>
                                                <Link to='/login'> <Button mt='15px' w='100%' color='white' _hover={{ backgroundColor: "red" }} bg='red'>Login</Button></Link>
                                            </AccordionPanel>
                                    }

                                </AccordionItem>
                            </Accordion>


                            <Link to='/cart'>   <Box onClick={onClose} bg={'red'} h='70px' w='60px' color={'white'} borderRadius={'15px'} p='10px' >
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                    <BsCart4 fontSize={'25px'} />
                                </Box>
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                    <Text fontWeight={'normal'}>Cart</Text>
                                </Box>
                            </Box>
                            </Link>
                        </Box>
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
