import { Box, Button, Heading,Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BsBluetooth, BsFillArrowRightCircleFill } from 'react-icons/bs'
import {GrFormView} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const data=[
    {
        "name":"For Fitness",
        link:"/earbud",
        "img":"https://www.boat-lifestyle.com/cdn/shop/files/Fitness_Freak_2.png?v=1685083745"
    },
    {
        "name":"For Parties",
        link:"/speaker",
        "img":"https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349"
    },
    {
        "name":"For Work",
        link:"/watch",
        "img":"https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745"
    },
    {
        "name":"For Entertainment",
        link: "/bluetoothHeadphone",
        "img":"https://www.boat-lifestyle.com/cdn/shop/files/Entertainment_2.png?v=1685083746"
    },
    {
        "name":"For Audiophiles",
        link:"/headphone",
        "img":"https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_3.png?v=1685942349"
    }
]

export const Slider3 = () => {
   
   
  return (
   


    <>
    <Box w='95%' display={'flex'} maxH={'600px'} gap={'7'} m='auto' sx={
     { 
    '::-webkit-scrollbar':{
           display:'none'
       }
    }
  }   overflowX={'auto'}
   >
      
      {
        data.map((el, i) => {

          return <Link to={el.link}>
           <Box  textAlign={'center'}  minW={'250px'}>
                         <Image src={el.img} />
                        <Box bg='blue.50' borderRadius={'0px 0px 10px 10px'} p={'25px 5px'}>
                         <Heading textAlign={'center'} fontSize={'2xl'}>{el.name}</Heading>
                          <Button bg={'blue.50'} _hover={{bg:"blue.50"}} color={'blue'} ><span style={{color:"blue",marginRight:"5px", marginBottom:"5px"}}>view</span> <BsFillArrowRightCircleFill ></BsFillArrowRightCircleFill> </Button>
                             </Box>
      
      
                          </Box></Link>
        })
      }
      
     
    </Box>



    </>



  )
}
