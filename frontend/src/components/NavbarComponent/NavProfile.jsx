import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { SingleUserData, UserLogout } from '../../redux/Authreducer/action'

export const NavProfile = () => {

    const dispatch = useDispatch()

const toast=useToast()
    useEffect(() => {

        dispatch(SingleUserData())

    }, [])


    const { ActiveUser } = useSelector((store) => store.AuthReducer)

    console.log("Active User", ActiveUser)


    const navigate = useNavigate()
    let token = JSON.parse(localStorage.getItem("token"))
    const handleLogout = (id) => {
        dispatch(UserLogout())
        localStorage.removeItem("token")
        navigate("/")
        toast({
            title: 'Logout',
            description: "Your Account Successfully Logged out",
            status: 'warning',
            duration: 5000,
            isClosable: true,
            position:'top'
          })

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
                            <PopoverHeader color={'red'} fontWeight={'bold'}>Hi User {ActiveUser[0]?.name}</PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverBody>
                                <Text _hover={{ fontWeight: "bold", color: "red" }}>Manage Your Order</Text>
                                <Text _hover={{ fontWeight: "bold", color: "red" }} mt='15px'>Account</Text>
                                {
                                    ActiveUser[0]?.isAdmin == true && <Link to='/admin'><Text _hover={{ fontWeight: "bold", color: "red" }} mt='15px'>AdminPage</Text></Link>
                                }
                                <Button
                                    onClick={() => handleLogout(ActiveUser[0]?._id)}
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
