import { Box, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'




export const Footer = () => {
    return (
        <Box mt={'50px'}>
            <Box pb='70px' bg='white'  pt={'30px'} display={'grid'} gap='6' gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}}  >
                <Box display={'flex'} textAlign={'center'} alignItems={'center'} justifyContent={'center'} >
                    <Box>
                        <Image mb='15px' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' />
                        <Heading mb='15px' fontSize={'2xl'}>Subscribe to our email alerts!</Heading>
                        <Input w='100%' border='1px solid black' placeholder='Enter Your Email' />
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-around'} >
                     
                     <Box>
                          <Heading fontSize={'lg'} mb='25px'>Shop</Heading>
                          <Text mb='13px'>True Wireless Earbuds</Text>
                          <Text mb='13px'>Wireless Earphones</Text>
                          <Text mb='13px'>Wired Earphones</Text>
                          <Text mb='13px'>Wireless Headphones</Text>
                          <Text mb='13px'>Wired Headphones</Text>
                          <Text mb='13px'>Gaming Headphones</Text>
                     </Box>
                     <Box>
                     <Heading fontSize={'lg'} mb='25px' color={'white'}>0</Heading>
                          <Text mb='13px'>Wireless Speakers</Text>
                          <Text mb='13px'>Soundbars</Text>
                          <Text mb='13px'>Smart Watches</Text>
                          <Text mb='13px'>Trimmers</Text>
                          <Text mb='13px'>Limited Editions</Text>
                          <Text mb='13px'>Car Accessories</Text>
                     </Box>

                </Box>
                <Box display={'flex'} justifyContent={'space-around'} >
                <Box>
                          <Heading fontSize={'lg'} mb='25px'>Help</Heading>
                          <Text mb='13px'>Track Your Order</Text>
                          <Text mb='13px'>Warrenty and Support</Text>
                          <Text mb='13px'>Return Policy</Text>
                          <Text mb='13px'>Service Centres</Text>
                          <Text mb='13px'>bulk Orders</Text>
                          <Text mb='13px'>FAQs</Text>
                          <Text mb='13px'>Why Buy Direct</Text>
                     </Box>
                     <Box>
                     <Heading mb='25px' fontSize={'lg'}>Company</Heading>
                          <Text mb='13px'>About boAt</Text>
                          <Text mb='13px'>News</Text>
                          <Text mb='13px'>Read Our blog</Text>
                          <Text mb='13px'>Careers</Text>
                          <Text mb='13px'>Security</Text>
                          <Text mb='13px'>Investor Relations</Text>
                          <Text mb='13px'>Social Responsibility</Text>
                          <Text mb='13px'>Warrenty Policy</Text>
                     </Box>

                </Box>
            </Box>
        </Box>
    )
}
