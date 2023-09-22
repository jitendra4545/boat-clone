import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
const selection1=[
    {
    "image":"https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123",
    "heading":"1 year Warranty"
    },
    {
    "image":"https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123",
    "heading":"7 day Replacement"
    },
    {
    "image":"https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123",
    "heading":"Free Shipping"
    },
    {
    "image":"https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123",
    "heading":"GST Billing"
    }
    ]
export const ProductPageFooter = () => {
  return (
    <Box>
        <Box display={'flex'} justifyContent={'space-evenly'}>
            {
                selection1.map((el,i)=>{
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
            <Text color={'grey'} _hover={{color:'red',textDecoration:"underline"}} fontWeight={'bold'} fontSize={'15px'}>Description</Text>
            <Text color={'grey'} _hover={{color:'red',textDecoration:"underline"}} fontWeight={'bold'} fontSize={'15px'}>Specifications</Text>
            <Text color={'grey'} _hover={{color:'red',textDecoration:"underline"}} fontWeight={'bold'} fontSize={'15px'}>Reviews(156)</Text>
            </Box>
       
        </Box>
      
      <Box w={{ base: "97%", md: "95%", lg: "90%" }} m={'auto'} >
           <Heading fontSize={'2xl'} fontWeight={'semibold'} >Wave Glory - Premium Smartwatch with 1.96" (4.97 cms) Big Display</Heading>
           <Text>Experience a new level of style and functionality with Wave Glory. Featuring a 1.96" HD Display, a functional crown, and a chic metal body complemented by the fashionable Ocean Band Strap, our calling smartwatch will keep your style game on top. Stay linked via Bluetooth calls with an inbuilt mic and calling feature. Access 100+ sports modes, and also track your health with heart rate, SpO2, and sleep sensors to improve your everyday with Wave Glory.</Text>
      </Box>


    </Box>
  )
}
