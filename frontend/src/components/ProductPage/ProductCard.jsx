import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FiStar } from 'react-icons/fi'
export const ProductCard = ({_id, brand, category, discountPercentage, price, rating, thumbnail, title }) => {
    return (
        <Box bg={'#eff4f7'} p='7px' borderRadius={'10px'} boxShadow={'md'} display={'flex'} w='auto'>
            <Box borderRadius={'10px'} w='40%' >
                <Image borderRadius={'10px 10px 0px 0px'} w='100%' h='85%' src={thumbnail} />
                <Box fontWeight={'bold'} borderRadius={'0px 0px 10px 10px'} h='15%' bg={'yellow'}>
                    {brand}
                </Box>
            </Box>
            <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'} w='60%' p='20px 10px' >
                <Box >
                    <Box  gap='1' display={'flex'} >
                        {/* bg={'#F7FAFC'}  */}
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} color={'green'}>
                            <FiStar />
                        </Box>
                        <Box fontWeight={'bold'}>
                            {rating}
                        </Box>
                    </Box>
                    <Heading textAlign={'left'} fontSize={'2xl'} mt='7px' mb='7px'>{title}</Heading>

                    <Box display={'flex'} gap='1'>
                        <Text fontWeight={'bold'}> ₹{price} </Text>
                        <Text fontSize={'15px'} textDecoration={"line-through"}>{Math.ceil(price * discountPercentage)}</Text>
                        <Text fontSize={'15px'} fontWeight={'bold'} color={'red'}>12.5%</Text>
                    </Box>

                    <Box mt={'5px'} mb='5px' border={'1px solid grey'}>
                    </Box>
                    <Box display={'flex'} gap='3'>
                        <Box borderRadius={'10px'} p='2px 5px' fontSize={'13px'} bg={'#B2F5EA'}>
                            Clear Calling
                        </Box>
                        <Box borderRadius={'10px'} p='2px 5px' fontSize={'13px'} bg={'#B2F5EA'}>
                            ASAP™ Charge
                        </Box>
                    </Box>

                    <Button mt='20px' w='100%' bg={'black'} color={'white'} >
                        ADD TO CART
                    </Button>


                </Box>
            </Box>
        </Box>
    )
}
