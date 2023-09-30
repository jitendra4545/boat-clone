import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CiFilter } from 'react-icons/ci'
import { TbArrowsSort } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { GetData } from '../../redux/AppReducer/action'
import { Link } from 'react-router-dom'
export const ProductNav = () => {
const [search,setSearch]=useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetData({search}))
    
      }, [])

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
                        <MenuButton border={'1px solid black'} as={Button} leftIcon={<CiFilter />} rightIcon={<ChevronDownIcon />} fontWeight={'bold'} >
                            Filter :
                        </MenuButton>
                        <MenuList p='20px' fontSize={'18px'}>
                            <Link to='/watch'><MenuItem _hover={{ borderRadius: '10px' }}>SmartWatch</MenuItem></Link>
                            {/* <Link to='/earbud'><MenuItem _hover={{ borderRadius: '10px' }}>Earbud</MenuItem></Link> */}
                            <Link to='/speaker'><MenuItem _hover={{ borderRadius: '10px' }}>Speaker</MenuItem></Link>
                            <Link to='/headphone'><MenuItem _hover={{ borderRadius: '10px' }}>Headphone</MenuItem></Link>
                            <Link to='/bluetoothHeadphone'><MenuItem _hover={{ borderRadius: '10px' }}>Bluetooth Headphone</MenuItem></Link>
                            {/* <MenuItem>New Arrivals</MenuItem> */}
                        </MenuList>
                    </Menu>




                </Box>
                <Box>

                    <Menu>
                        <MenuButton border={'1px solid black'} as={Button} leftIcon={<TbArrowsSort />} rightIcon={<ChevronDownIcon />} fontWeight={'bold'} >
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
