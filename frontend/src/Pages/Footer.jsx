import { Box, Heading, Image, Input } from '@chakra-ui/react'
import React from 'react'




export const Footer = () => {
    return (
        <Box>
            <Box display={'grid'} gap='6' gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} >
                <Box border={'1px solid red'}>
                    <Box>
                        <Image src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' />
                        <Heading fontSize={'2xl'}>Subscribe to our email alerts!</Heading>
                        <Input />
                    </Box>
                </Box>
                <Box  border={'1px solid red'}>

                </Box>
                <Box  border={'1px solid red'}>

                </Box>
            </Box>
        </Box>
    )
}
