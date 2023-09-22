import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
const selection1 = [
    {
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123",
        "heading": "1 year Warranty"
    },
    {
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123",
        "heading": "7 day Replacement"
    },
    {
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123",
        "heading": "Free Shipping"
    },
    {
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123",
        "heading": "GST Billing"
    }
]



export const ProductPageFooter = ({ data }) => {
    console.log(data)
    return (
        <Box>
            <Box display={'flex'} justifyContent={'space-evenly'}>
                {
                    selection1.map((el, i) => {
                        return <Box key={i}>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                <Box>
                                    <Image src={el.image} />

                                </Box>

                            </Box>
                            <Text fontWeight={'bold'}>{el.heading}</Text>
                        </Box>
                    })
                }
            </Box>
            <Box mt='15px' p='20px 0px' mb='15px' w='100%' bg='black'>
                <Box display={'flex'} justifyContent={'space-between'} w='50%' margin={'auto'} >
                    <Text color={'grey'} _hover={{ color: 'red', textDecoration: "underline" }} fontWeight={'bold'} fontSize={'15px'}>Description</Text>
                    <Text color={'grey'} _hover={{ color: 'red', textDecoration: "underline" }} fontWeight={'bold'} fontSize={'15px'}>Specifications</Text>
                    <Text color={'grey'} _hover={{ color: 'red', textDecoration: "underline" }} fontWeight={'bold'} fontSize={'15px'}>Reviews(156)</Text>
                </Box>

            </Box>

            <Box w={{ base: "97%", md: "95%", lg: "90%" }} m={'auto'} textAlign={'center'} >
                <Heading fontSize={'3xl'} fontWeight={'semibold'} mb='20px' >Airdopes 141 - Wireless Earbuds</Heading>
                <Text >Let the noise of the world drown as you jam to your rhythm with Airdopes 141. Equipped with 8mm drivers, these dope wireless earbuds make your playlist sound better with crystal clear audio quality and powerful bass. Experience seamless calling and be clearly heard with ENx™ Technology. That is not all, ASAP™ Charge technology empowers you with 75 Minutes of playback with just 5 Minutes of charging. With IPX4 Sweat and Water Resistance, there's no stopping you from listening to your workout mix while breaking a sweat. Moreover, its IWPTM Technology and Quick Response Touch Controls ensure you can answer calls and switch music without interrupting your flow. Go ahead, your perfect audio match is right here.</Text>
            </Box>

            <Box mt='20px' bg='teal.400' >
                <Box w='80%' margin={'auto'} >
                    <Box display={'grid'} gap='20' gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)" }} >
                        <Box w='100%'>
                            <Image w='100%' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_11_32d68243-cbf0-43da-af59-715dec4fbd42.png?v=1626870164' />
                        </Box>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w='100%'>
                            <Box color={'white'}>
                                <Heading fontWeight={'semibold'}>boAtheads, get ready for the most insane Truly Wireless experience ever with ENxTM   Technology.</Heading>
                                <Text mt='50px' fontSize={'25px'} fontWeight={'bold'}>{data}</Text>
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>



            <Box mt='20px'  >
                <Box w='100%' margin={'auto'} >
                    <Box display={'grid'} gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)" }} >
                        <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} w='100%'>
                            <Box bg='black' p='40px 70px' >
                                <Box >
                                <Image w='100%' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_6a4ed241-de2f-4212-a726-19af0d46c427.png?v=1626870394' />
                                </Box>
                              
                                <Text color={'white'} fontSize={'25px'} fontWeight={'bold'}>Up to 42 Hours Total Playback</Text>
                                <Text color={'white'} >With a battery backup so strong, nothing can go wrong. Get up to 42 Hours of total playback and never miss another meeting.</Text>
                            </Box>
                        </Box>

                        <Box bg={'grey'} display={'flex'} justifyContent={'center'} alignItems={'center'} w='100%'>
                            <Box p='40px 70px' color={'white'}>
                                <Heading fontWeight={'semibold'}>Charge for 5 Minutes, groove for 75 Minutes</Heading>
                                <Text >Let nothing come in between your grooving sessions or important calls. With just 5 Minutes of charging, enjoy 75 Minutes of uninterrupted performance. </Text>
                                <Image w='90%' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_4_33e283b0-408a-4f86-9fe5-f2466c8d8193.png?v=1626870394' />
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>




        </Box>
    )
}
