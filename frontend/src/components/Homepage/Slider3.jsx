import { Box, Heading,Image, Text } from '@chakra-ui/react'
import React from 'react'

const data=[
    {
        "name":"For Fitness",
        "img":"https://www.boat-lifestyle.com/cdn/shop/files/Fitness_Freak_2.png?v=1685083745"
    },
    {
        "name":"For Parties",
        "img":"https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349"
    },
    {
        "name":"For Work",
        "img":"https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745"
    },
    {
        "name":"For Entertainment",
        "img":"https://www.boat-lifestyle.com/cdn/shop/files/Entertainment_2.png?v=1685083746"
    },
    {
        "name":"For Audiophiles",
        "img":"https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_3.png?v=1685942349"
    }
]

export const Slider3 = () => {
  return (
    <Box w='95%' m='auto' display={'flex'} gap='7'>
        {
            data.map((el,i)=>{
                return <Box>
                    <Image src={el.img} />
                    <Box bg='blue.100' borderRadius={'0px 0px 10px 10px'} p={'25px 5px'}>
                    <Heading textAlign={'center'} fontSize={'2xl'}>{el.name}</Heading>
                    <Text>view</Text>
                        </Box>


                    </Box>
            })
        }
    </Box>
  )
}
