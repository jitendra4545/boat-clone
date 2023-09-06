import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Tab, TabIndicator, TabList, Tabs, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon, HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { CgProfile } from 'react-icons/cg'
import { BsCart4 } from 'react-icons/bs'
import { useMediaQuery } from '@chakra-ui/react'


const navItems = [{
    name: "Products",
    link: ""
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

    console.log(isLargerThan800)



    return (
        <Box  position="sticky" top='0' boxShadow={'lg'}>


            {
                isLargerThan800 ? <Flex    >

                    <Center w='20%'>
                        <Image w='30%' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' />
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
                                            return <Tab _hover={{fontWeight:'bold'}} fontSize={'15px'}>{el.name}</Tab>
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
                            <Box >
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                    <CgProfile fontSize={'25px'} />
                                </Box>
                                <Box>
                                    <Text>Profile</Text>
                                </Box>
                            </Box>
                            <Box >
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                    <BsCart4 fontSize={'25px'} />
                                </Box>
                                <Box>
                                    <Text>Cart</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Flex>

                    :

                    <Box display={'flex'} justifyContent={'space-between'} p='15px 35px' >
                        <Box>
                            <Image w='50%' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' />
                        </Box>
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

                    <DrawerBody mt={'150px'} mb='150px' display={'grid'}   >

                        {
                            navItems.map((el) => {
                                return <Menu >
                                    <MenuButton as={Button} >
                                        {el.name}
                                    </MenuButton>

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
