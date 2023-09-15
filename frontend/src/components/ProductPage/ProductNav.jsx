import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CiFilter } from 'react-icons/ci'
import { TbArrowsSort } from 'react-icons/tb'
export const ProductNav = () => {

    const [sort, setsort] = useState("")

    console.log(sort)

    return (
        <Box mt='20px'>
            <Box textAlign={'left'}>
                <Text fontSize={'13px'}>
                    {"Home > Products"}
                </Text>
                <Heading fontSize={'2xl'} mt={'20px'} mb='20px'>All Products</Heading>
            </Box>
            <Flex justifyContent={'space-between'}>
                <Box>

                    <Menu>
                        <MenuButton as={Button} leftIcon={<CiFilter />} rightIcon={<ChevronDownIcon />} fontWeight={'bold'} >
                            Filter :
                        </MenuButton>
                        <MenuList p='20px' fontSize={'18px'}>
                            <MenuItem _hover={{ borderRadius: '10px' }}>Smartphones</MenuItem>
                            <MenuItem _hover={{ borderRadius: '10px' }}>Laptop</MenuItem>
                            <MenuItem _hover={{ borderRadius: '10px' }}>Women Watches</MenuItem>
                            <MenuItem _hover={{ borderRadius: '10px' }}>Men Watches</MenuItem>
                            {/* <MenuItem>New Arrivals</MenuItem> */}
                        </MenuList>
                    </Menu>




                </Box>
                <Box>

                    <Menu>
                        <MenuButton as={Button} leftIcon={<TbArrowsSort />} rightIcon={<ChevronDownIcon />} fontWeight={'bold'} >
                            Sort :
                        </MenuButton>
                        <MenuList p='20px' fontSize={'18px'} >
                            <MenuItem _hover={{ borderRadius: '10px' }} >Alphabetically, A-Z</MenuItem>
                            <MenuItem _hover={{ borderRadius: '10px' }}>Alphabetically, Z-A</MenuItem>
                            <MenuItem _hover={{ borderRadius: '10px' }}>Price, low to high</MenuItem>
                            <MenuItem _hover={{ borderRadius: '10px' }}>Price, high to low</MenuItem>
                            <MenuItem _hover={{ borderRadius: '10px' }}>New Arrivals</MenuItem>
                        </MenuList>
                    </Menu>

                </Box>
            </Flex>


        </Box>
    )
}
