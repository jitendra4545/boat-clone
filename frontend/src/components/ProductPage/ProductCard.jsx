import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FiStar } from 'react-icons/fi'
export const ProductCard = ({ _id, brand, category, discountPercentage, price, rating, thumbnail, title }) => {
    return (
        <Box bg={'white'} p='7px' borderRadius={'10px'} boxShadow={'md'} display={'flex'} w='auto'>
            <Box borderRadius={'10px'} w='40%' >
                <Image borderRadius={'10px 10px 0px 0px'} w='100%' h='170px' src={thumbnail} />
                <Box textAlign={'center'} fontWeight={'bold'} borderRadius={'0px 0px 10px 10px'} h='15%' bg={'yellow'}>
                    {brand}
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'} w='60%' p='6px 5px' >
                <Box >
                    <Box gap='1' display={'flex'} >
                        {/* bg={'#F7FAFC'}  */}
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} color={'green'}>
                            <FiStar />
                        </Box>
                        <Box fontWeight={'bold'}>
                            {rating}
                        </Box>
                    </Box>
                    <Heading noOfLines={1} textAlign={'left'} fontSize={'lg'} mt='7px' mb='7px'>{title}</Heading>

                    <Box display={'flex'} gap='1'>
                        <Text fontWeight={'bold'}> ₹{price} </Text>
                        <Text fontSize={'15px'} textDecoration={"line-through"}>{Math.ceil(price * discountPercentage/10)}</Text>
                        <Text fontSize={'13px'} fontWeight={'bold'} color={'green'}>{discountPercentage}{ " % OFF"} </Text>
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
                    <Box p='30px 0px 0px 0px'>
                        <Button _hover={{bg:'black'}} w='100%' bg={'black'} color={'white'} >
                            ADD TO CART
                        </Button>
                    </Box>



                </Box>
            </Box>
        </Box>
    )
}
