import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'


const blogs=[
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/articles/Aman_600x.png?v=1669814321",
        date:"30 Nov, 2022",
        heading:"Aman Gupta boAt (Shark Tank India 2) Age, Net worth, Email ID ........",
        desc:"we know you keep searching for things on the internet — after all, what better source is there in our times. People search for all kinds of things online, ranging from why are we born to Shark Tank season 2 release date. Just to give you some perspective, here are a few things you can commonly find in our search history:"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/articles/Main-banner_600x.jpg?v=1619585623",
        date:"30 Apr, 2021",
        heading:"The Ultimate Smartwatch Guide - Get The World On Your Wrist",
        desc:"With boAt smart watches, carry the world on your wrist and make life easier for you with integrated controls, easy access, and hassle free technology. Say yes to fitness!"
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/articles/dc-Blog_600x.png?v=1656406645",
        date:"28 Jun, 2022",
        heading:"Iconic meets Iconic: boAt & DC Comics Join Hands to Get Super......",
        desc:"DC Official Merchandise from boAt | DC Comics. Best audio products in Superman, Batman, and Wonder Woman skins. Lay your hands on these cool Bluetooth speaker, Bluetooth headphones, and ear buds."
    },
    {
        img:"https://www.boat-lifestyle.com/cdn/shop/articles/1_1_600x.jpg?v=1695929892",
        date:"22 Sep, 2023",
        heading:"How Custom Watch Faces Enhance Your Daily Routine",
        desc:"Smartwatches have certainly made our everyday lives easier and more efficient. But it is not limited to that, the watch faces in your smartwatch can help it become an extension of your personal style while enhancing your day-to-day activities. With the ability to customise the design of the watch face, you can create trendy watch face design that reflects your unique personality while optimising its functionality to suit your needs."
    }
]

export const Slider6 = () => {
    return (
        <>
            <Box w='95%' display={'flex'} maxH={'380px'} gap={'4'} m='auto' sx={
                {
                    '::-webkit-scrollbar': {
                        display: 'none'
                    }
                }
            } overflowX={'auto'}
            >
           {
            blogs.map((el,i)=>{
              return  <Box  borderRadius={'10px'} bg='blackAlpha.50' maxH={'380px'} minW={'360px'}   key={i}>
                         <Image borderRadius={'10px 10px 0px 0px'} src={el.img} />
                        <Box borderRadius={'10px'} p='10px'> <Text fontWeight={'semibold'} color={'grey'}>{el.date}</Text>
                         <Text  noOfLines={'2'} fontWeight={'bold'} fontSize={'xl'}>{el.heading}</Text>
                         <Text noOfLines={'2'}>{el.desc}</Text>
                         <Button mt='5px' w='full' borderRadius={'30px'} bg='white' _hover={{bg:"white"}} border={'1px solid black'}  fontWeight={'normal'}>Read More <BsArrowRightShort/></Button>
                         </Box>
                    </Box>
            })
           }



            </Box>



        </>

    )
}
