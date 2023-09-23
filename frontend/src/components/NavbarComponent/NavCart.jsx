import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetCart } from '../../redux/CartReducer/action'

export const NavCart = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const btnRef = React.useRef()

    const dispatch = useDispatch()
    const cart = useSelector((store) => store.CartReducer.cart)

    console.log("Update,reducer", cart)
    useEffect(() => {
        dispatch(GetCart())
    }, [])

    return (
        <Box >
            <Link to='/cart'>  
            <Box >
            
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                
                    <BsCart4 fontSize={'25px'} />
                  {cart.length>0 &&   <Box ml='-10px' mb='5px' p='3px' fontWeight={'bold'} color={'white'}  bg='red' fontSize={'9px'} borderRadius={'50%'} >{cart.length}</Box>}
                </Box>
                <Box>
                    <Text>Cart</Text>
                </Box>
            </Box>
            </Link>


            {/* <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader position={'sticky'} top="0" >Your Cart</DrawerHeader>

                    <DrawerBody>
                        <Box>

                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer> */}

        </Box>
    )
}
