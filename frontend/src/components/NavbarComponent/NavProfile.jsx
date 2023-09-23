import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Text } from '@chakra-ui/react'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

export const NavProfile = () => {

    let token = JSON.parse(localStorage.getItem("token"))
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()

    }
  return (
    <Box>
        <Popover trigger="hover" >
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

    </Box>
  )
}
