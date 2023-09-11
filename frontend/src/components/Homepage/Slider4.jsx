import { Box, Image, Text } from '@chakra-ui/react'
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
export const Slider4 = () => {
  return (
    <Box>
        <Box w='100%'m='auto' display={'flex'} justifyContent={'center'} gap={{base:"2",md:"7",lg:"10"}} alignItems={'center'}>
            {
                selection1.map((el)=>{
                   return <Box textAlign={'center'}>
                    <Image h='140px' w='100%' src={el.image} />
                    <Text fontSize={{base:"12px",md:"20px"}} fontWeight={'semibold'}>{el.heading}</Text>
                        </Box>
                })
            }
        </Box>
    </Box>
  )
}
