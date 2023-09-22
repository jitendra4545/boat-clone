import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const NavCart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <Box >
         {/* <Link to='/cart'>   */}
         <Box  onClick={onOpen}>
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                    <BsCart4 fontSize={'25px'} />
                                </Box>
                                <Box>
                                    <Text>Cart</Text>
                                </Box>
                            </Box>
                             {/* </Link> */}


                             <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </Box>
  )
}
